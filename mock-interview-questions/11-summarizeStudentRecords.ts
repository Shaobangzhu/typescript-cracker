type Campus = 'UCR' | 'OtherUC' | 'NonUC';

interface TermRecord {
    term: string;
    campus: Campus;
    units: number;
    tuitionPaid: boolean;
    leaveOfAbsence: boolean;
}

interface StudentSummary {
    isActive: boolean;
    hasPaymentIssue: boolean;
    lastEnrolledTerm?: string;
}

type TermSeason = 'W' | 'Sp' | 'Su' | 'F';

const TERM_ORDER: TermSeason[] = ['W', 'Sp', 'Su', 'F'];

function parseTerm(term: string): { year: number; seasonIndex: number} {
    const yearPart = term.slice(0, 4);
    const seasonPart = term.slice(4) as TermSeason;
    const year = Number(yearPart);
    const seasonIndex = TERM_ORDER.indexOf(seasonPart);

    if(!Number.isFinite(year) || seasonIndex === -1) {
        throw new Error(`Invalid term format: ${term}`);
    }
    return { year, seasonIndex };
}

function compareTermsDesc(a: string, b: string): number {
    const termA = parseTerm(a);
    const termB = parseTerm(b);

    if (termA.year !== termB.year) {
        return termB.year - termA.year;
    }

    return termB.seasonIndex - termA.seasonIndex;
}

function sortByTermDesc(records: TermRecord[]): TermRecord[] {
    return [...records].sort((a, b)=>compareTermsDesc(a.term, b.term));
}

function getEnrolledTermsDesc(records: TermRecord[]): TermRecord[] {
    return sortByTermDesc(records).filter(r=>r.units > 0);
}

function getEnrolledUCRTermsDesc(records: TermRecord[]): TermRecord[] {
    return getEnrolledTermsDesc(records).filter(r =>r.campus === 'UCR');
}

function summarizeStudent(records: TermRecord[]): StudentSummary {
    if (!records.length) {
        return {
            isActive: false,
            hasPaymentIssue: false,
            lastEnrolledTerm: undefined,
        };
    }

    const enrolledTerms = getEnrolledTermsDesc(records);
    const enrolledUCRTerms = getEnrolledUCRTermsDesc(records);

    const lastEnrolledTerm = enrolledTerms[0]?.term;
    let isActive = true;
    if (enrolledUCRTerms.length > 0) {
        const lastThreeUCR = enrolledUCRTerms.slice(0, 3);
        isActive = lastThreeUCR.some(r => r.units >= 6 && r.tuitionPaid === true && r.leaveOfAbsence === false);
    } else {
        isActive = false;
    }

    let hasPaymentIssue = false;
    if (enrolledTerms.length > 0) {
        const lastTwoAnyCampus = enrolledTerms.slice(0, 2);
        hasPaymentIssue = lastTwoAnyCampus.some(r=>r.tuitionPaid === false);
    } else {
        hasPaymentIssue = false;
    }

    return {
        isActive,
        hasPaymentIssue,
        lastEnrolledTerm
    }
}