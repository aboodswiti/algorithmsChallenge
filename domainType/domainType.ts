export function domainType(domains: string[]): string[] {
    const fullDomain = { org: "organization", com: "commercial", net: "network", info: "information"] }
    const domainType: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split(".")
        const lastDomain = domain[domain.length - 1];
        domainType.push(fullDomain[lastDomain])

    }

    return domainType
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));