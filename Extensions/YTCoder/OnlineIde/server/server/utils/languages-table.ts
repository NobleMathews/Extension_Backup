export interface Language {
    lang: string;
    name: string;
    version: string;
    index: string;
}

export type LanguageTable = Iterable<[string, Language[]]>;

export type LanguageMap = Map<string, Language[]>;

export const languagesTable: LanguageTable = [
    [
        'java', [
            { lang: 'java', name: 'Java', version: 'JDK 9.0.1', index: '1' },
            { lang: 'java', name: 'Java', version: 'JDK 10.0.1', index: '2' }
        ]
    ],
    [
        'nodejs', [
            { lang: 'nodejs', name: 'NodaJS', version: '9.2.0', index: '1' }
        ]
    ],
    [
        'python3', [
            { lang: 'python3', name: 'Python 3', version: '3.6.5', index: '2' }
        ]
    ],
    [
        'csharp', [
            { lang: 'csharp', name: 'C#', version: 'mono 5.10.1', index: '2' }
        ]
    ],
    [
        'ruby', [
            { lang: 'ruby', name: 'Ruby', version: '2.2.4', index: '0' }
        ]
    ],
    [
        'php', [
            { lang: 'php', name: 'PHP', version: '5.6.16', index: '0' },
            { lang: 'php', name: 'PHP', version: '7.2.5', index: '2' }
        ]
    ]
];