const APP_TRANSLATIONS = {
	en: {
		langLabel: "English",
		newChat: "New Chat",
		language: "Language",
		apiEndpoint: "API Endpoint",
		apiKey: "API Key",
		apiMode: "API Type",
		modeOllama: "Ollama API",
		modeOpenAI: "OpenAI / vLLM API",
		refreshModels: "Refresh Models",
		model: "Model",
		role: "Role",
		systemPrompt: "System Prompt",
		custom: "Custom...",
		clearHistory: "Remove history",
		history: "Chat History",
		historySettings: "History:",
		inputPlaceholder: "Type a message...",
		confirmDelete: "Delete all history?",
		confirmDeleteOne: "Delete this chat?",
		errorConn: "API unavailable",
		errorServer: "Server offline",
		errorModel: "Model not found — model list refreshed",
		newChatTitle: "New Chat",
		exportAll: "Export history",
		settings: "Settings",
		theme: "Theme",
		themeAuto: "System Default",
		themeLight: "Light",
		themeDark: "Dark",
		chatMemory: "Conversation Memory",
		memoryShort: "Short (4 msgs)",
		memoryBalanced: "Balanced (12 msgs)",
		memoryDeep: "Deep (24 msgs)",
		memoryExecutive: "Executive (50 msgs)",
		stoppedByUser: "Stopped by user",
		saveSettings: "Save Settings",
		retry: "Edit question",
		showApiKey: "API Key Settings",
		copy: "Copy to clipboard",
		externalEndpointWarning: "WARNING:\nYou have set an external (non-local) API endpoint.\nYour communication and files will be sent outside your local network.",
		storageFull: "Warning: Local storage capacity exceeded! Please clear history manually.",
		fileTooLarge: "File size exceeds 10MB limit.",
		imageLabel: "Image",
		updateAvailable: "New version is available!",
		updateLink: "(Update)",
		langName: "English",
		welcomeHeading: "Hello",
		welcomeSubheading: "How can I help you today?",
		suggestionPrompt1: "Explain a complex concept",
		suggestionPrompt2: "Write a poem or story",
		suggestionPrompt3: "Debug some code",
		suggestionPrompt4: "Plan a trip",
		roles: [
			{
				label: "PHP Expert",
				value: "You are an expert in PHP 8.4, clean code and SQL optimization. Answer in English."
			},
			{
				label: "JS Guru",
				value: "You are a senior Javascript developer. Use modern ES6+ and jQuery. Answer in English."
			},
			{
				label: "Python Data Scientist",
				value: "You are a senior Data Scientist and Python expert. Focus on clean, efficient code, Data Analysis (Pandas, NumPy) and Machine Learning. Answer in English."
			},
			{
				label: "Java Architect",
				value: "You are a Java software architect. Focus on Spring Boot, enterprise patterns, SOLID principles and performance. Answer in English."
			},
			{
				label: "Rust Systems Expert",
				value: "You are a systems programming expert specializing in Rust. Focus on memory safety, zero-cost abstractions and concurrency. Answer in English."
			},
			{
				label: "DevOps Engineer",
				value: "You are an expert DevOps engineer. Provide best practices for Docker, Kubernetes, CI/CD pipelines and Unix administration. Answer in English."
			},
			{
				label: "HTML/CSS - UI Specialist",
				value: "You are an expert in modern UI/UX, CSS3, HTML5, and web accessibility. Focus on clean code, responsiveness, and visual excellence inspired by modern design systems like Google Gemini. Answer in English."
			},
			{
				label: "Academic / Tech Writer",
				value: "You are an expert in technical writing and academic formatting (Markdown/LaTeX). Help structure documentation and research papers formally. Answer in English."
			},
			{
				label: "Writer",
				value: "You are a skilled writer who focuses on creating human-like, engaging content. \n- Vary Sentence Length and Structure: Break up long, complex sentences and combine short, choppy ones. Human writing naturally mixes short, punchy sentences with longer, reflective ones. \n- Add Personal Anecdotes and Opinions: Insert personal insights, stories, or specific examples that only a human with lived experience would know. AI cannot replicate genuine personal perspectives. \n- Rewrite in Your Own Voice: Treat AI output as a rough draft or bulleted notes rather than a final product. Rewrite the content completely in your own voice. Use Contractions and Informal Language: Change 'do not' to 'don't,' 'it is' to 'it's,' etc. Add conversational filler or idioms where appropriate to create a warmer tone. Remove 'AI Words': Delete overused AI buzzwords such as 'delve,' 'tapestry,' 'leverage,' 'streamlined,' 'aforementioned,' and 'in conclusion'. Answer in English."
			}
		],
		advancedSettings: "Advanced Settings",
		showStats: "Show Statistics"
	},
	sk: {
		langLabel: "Slovenčina",
		newChat: "Nový čet",
		language: "Jazyk",
		apiEndpoint: "API Endpoint",
		apiKey: "API Kľúč",
		apiMode: "API Typ",
		modeOllama: "Ollama API",
		modeOpenAI: "OpenAI / vLLM API",
		refreshModels: "Obnoviť modely",
		model: "Model",
		role: "Rola",
		systemPrompt: "Systémový Prompt",
		custom: "Vlastná...",
		clearHistory: "Zmazať históriu",
		history: "História konverzácií",
		historySettings: "História:",
		inputPlaceholder: "Napíšte správu...",
		confirmDelete: "Naozaj vymazať celú históriu?",
		confirmDeleteOne: "Zmazať tento čet?",
		errorConn: "API nedostupná",
		errorServer: "Server nedostupný",
		errorModel: "Model nenájdený — zoznam modelov bol obnovený",
		newChatTitle: "Nový čet",
		exportAll: "Export histórie",
		settings: "Nastavenia",
		theme: "Téma",
		themeAuto: "Systémová",
		themeLight: "Svetlá",
		themeDark: "Tmavá",
		chatMemory: "Pamäť konverzácie",
		memoryShort: "Krátka (4 správy)",
		memoryBalanced: "Vyvážená (12 správ)",
		memoryDeep: "Hlboká (24 správ)",
		memoryExecutive: "Maximálna (50 správ)",
		stoppedByUser: "Zastavené používateľom",
		saveSettings: "Uložiť nastavenia",
		retry: "Zopakovať otázku",
		showApiKey: "Nastavenia API kľúča",
		copy: "Skopírovať do schránky",
		externalEndpointWarning: "VAROVANIE:\nNastavili ste externý (nelokálny) API endpoint.\nVaša komunikácia a súbory budú odosielané mimo vašu lokálnu sieť.",
		storageFull: "Upozornenie: Kapacita miestneho úložiska bola prekročená! Vymažte históriu manuálne.",
		fileTooLarge: "Súbor presahuje limit 10MB.",
		imageLabel: "Obrázok",
		updateAvailable: "Nová verzia je dostupná!",
		updateLink: "(Update)",
		langName: "Slovenčina",
		welcomeHeading: "Ahoj",
		welcomeSubheading: "S čím ti môžem dnes pomôcť?",
		suggestionPrompt1: "Vysvetli zložitý pojem",
		suggestionPrompt2: "Napíš báseň alebo príbeh",
		suggestionPrompt3: "Oprav kód",
		suggestionPrompt4: "Naplánuj výlet",
		roles: [
			{
				label: "PHP Expert",
				value: "Si expert na PHP 8.4, čistý kód a SQL optimalizáciu. Odpovedaj v slovenčine."
			},
			{
				label: "JS Guru",
				value: "Si senior Javascript vývojár. Používaj moderné ES6+ a jQuery. Odpovedaj v slovenčine."
			},
			{
				label: "Python Data Scientist",
				value: "Si senior Data Scientist a expert na Python. Sústreď sa na čistý kód, analýzu dát (Pandas, NumPy) a strojové učenie. Odpovedaj v slovenčine."
			},
			{
				label: "Java Architekt",
				value: "Si Java softvérový architekt. Sústreď sa na Spring Boot, enterprise návrhové vzory, SOLID princípy a výkon. Odpovedaj v slovenčine."
			},
			{
				label: "Rust Systémový Expert",
				value: "Si expert na hardvérovo orientované programovanie so špecializáciou na Rust. Sústreď sa na bezpečnosť pamäte a paralelné programovanie. Odpovedaj v slovenčine."
			},
			{
				label: "DevOps Inžinier",
				value: "Si DevOps špecialista. Odporúčaj overené postupy pre Docker, Kubernetes, CI/CD a administráciu Linux serverov. Odpovedaj v slovenčine."
			},
			{
				label: "HTML/CSS - UI špecialista",
				value: "Si expert na moderné UI/UX, CSS3, HTML5 a webovú prístupnosť. Sústreď sa na čistý kód, responzívnosť a vizuálnu dokonalosť inšpirovanú modernými dizajn systémami ako Google Gemini. Odpovedaj v slovenčine."
			},
			{
				label: "Akademický / Tech Písar",
				value: "Si expert na technické písanie a akademické formátovanie (Markdown/LaTeX). Pomáhaj štylizovať formálnu dokumentáciu a odborné články. Odpovedaj v slovenčine."
			},
			{
				label: "Spisovateľ",
				value: "Si skúsený spisovateľ, ktorý sa zameriava na tvorbu pútavého obsahu, ktorý pôsobí ľudsky. \n- Meň dĺžku a štruktúru viet: Rozbíjaj dlhé, zložité vety a spájaj krátke, úsečné. Ľudské písanie prirodzene kombinuje úderné krátke vety s dlhšími, úvahovými. \n- Pridávaj osobné anekdoty a názory: Vkladaj osobné postrehy, príbehy alebo konkrétne príklady, ktoré môže poznať len človek so skutočnou životnou skúsenosťou. AI nedokáže replikovať autentické osobné perspektívy. \n- Prepíš text vlastným hlasom: Považuj výstup z AI len za hrubý náčrt alebo poznámky v bodoch, nie za finálny produkt. Prepíš obsah kompletne vlastným hlasom. Používaj hovorový jazyk: Pridaj konverzačnú výplň alebo idiómy tam, kde je to vhodné, aby si vytvoril vrelší tón. Odstráň 'AI slová': Vymaž nadmerne používané klišé ako 'ponorme sa do', 'mozaika', 'využiť' (leverage), 'zefektívnený', 'vyššie spomenutý' a 'na záver'.  Odpovedaj v slovenčine."
			}
		],
		advancedSettings: "Rozšírené nastavenia",
		showStats: "Zobraziť štatistiky"
	}
};