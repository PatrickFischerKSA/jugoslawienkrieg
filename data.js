const MODULES = [
  {
    id: "vorgeschichte",
    step: "1",
    title: "Pulverfass Jugoslawien",
    era: "1914 bis 1989",
    intro:
      "Diese Auftaktstation rekonstruiert die langen historischen Linien des späteren Zerfalls: imperiale Altlasten, Gewalt im Zweiten Weltkrieg, Titos Herrschaft, föderale Spannungen und den Aufstieg nationalistischer Politik.",
    goal:
      "Du kannst erklären, warum Jugoslawien unter Tito stabil wirkte, aber zugleich innere Konflikte, regionale Ungleichheit und unterdrückte Nationalismen weitertrug.",
    route:
      "Sieh zuerst die erste Dokumentationsfolge, arbeite dann mit dem PDF-Fragenkatalog und nutze die beiden Playlist-Videos für Wiederholung oder Verdichtung. Sichere zunächst Begriffe, dann Ursachenketten, dann Deutungen.",
    teacherNote:
      "Die Station eignet sich als gemeinsamer Einstieg in die Vorgeschichte des Zerfalls oder als vorbereitender Hausauftrag vor der Kriegsphase.",
    teacherToolkit: {
      duration: "35 bis 45 Minuten",
      socialForms: [
        "Einzelarbeit mit kurzer Sicherung im Tandem",
        "Leitbegriffe im Plenum clustern",
        "Transferfrage als Schreibauftrag mit anschließendem Vergleich"
      ],
      assessmentFocus: [
        "Titos Herrschaft nicht mit echter Konfliktloesung verwechseln",
        "Foederale Ordnung als spannungsreiche Konstruktion erkennen",
        "Historische Langzeitlinien und aktuelle politische Instrumentalisierung verbinden"
      ],
      misconceptions: [
        "Jugoslawien sei erst 1991 ploetzlich instabil geworden",
        "Ethnische Unterschiede allein erklaerten den Krieg",
        "Titos Staat sei ein harmonischer Vielvölkerstaat gewesen"
      ],
      product:
        "Begriffsnetz zu Stabilisierung und Zerfall oder ein begründeter Kurzkommentar zur Vorgeschichte.",
      extension:
        "Mit einer Debattenfrage arbeiten: War Jugoslawien unter Tito ein tragfaehiger Staat oder nur ein eingefrorener Konfliktraum?"
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Skyline von Sarajevo mit sichtbaren Kriegsschaeden im Mai 1996",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    prompts: [
      "Achte darauf, wie die Doku Stabilitaet und Repression gleichzeitig beschreibt.",
      "Notiere, welche historischen Altlasten vor 1990 immer wieder aktiviert wurden.",
      "Unterscheide zwischen föderaler Form, realer Machtverteilung und nationalistischer Mobilisierung.",
      "Halte fest, warum 1989/90 auf bereits bestehende Konfliktlinien zurückgegriffen werden konnte."
    ],
    resources: [
      {
        id: "r-vorgeschichte-doku-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 1: Pulverfass Jugoslawien",
        focus: "Vorgeschichte, Tito, föderale Ordnung, Nationalismus und Aufstieg Milosevics",
        link: "https://www.dropbox.com/scl/fi/mbvt6nif4o3njrb2noijk/Balkan-in-Flammen-Pulverfass-Jugoslawien-Staffel-1-Folge-1.mp4?rlkey=5glwor40fqn3j8hcfpz0yzpwo&st=tj8dx0a7&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-vorgeschichte-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Dreiteiliger Fragenreader mit Leitfragen zu Vorgeschichte, Krieg und Nachordnung",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader", "Fragen"]
      },
      {
        id: "r-vorgeschichte-yt-1",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 1",
        focus: "zusätzlicher Impuls zur historischen Einordnung des Zerfalls",
        link: "https://www.youtube.com/watch?v=_HGCHTueg-Q&list=PL8991DFCF33730589",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-vorgeschichte-yt-2",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 2",
        focus: "ergänzende Perspektive auf Nationalismus, Krise und politische Radikalisierung",
        link: "https://www.youtube.com/watch?v=q8uG0o0b4wQ&list=PL8991DFCF33730589&index=2",
        tags: ["YouTube", "Vertiefung"]
      }
    ],
    questions: [
      {
        id: "q-vorgeschichte-1",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp, wie Tito die ethnischen Spannungen innerhalb Jugoslawiens über Jahrzehnte kontrollierte.",
        help:
          "Die Sofortkorrektur sucht mehrere Sinnschichten. Nenne nicht nur Tito als Person, sondern auch Mittel seiner Herrschaft.",
        placeholder: "Tito stabilisierte Jugoslawien, indem ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf"],
        conceptGroups: [
          {
            label: "autoritäre Führung oder Parteiherrschaft",
            variants: [
              "autoritär",
              "einparteienstaat",
              "parteiherrschaft",
              "diktatorisch",
              "starker fuehrer",
              "kommunistische partei"
            ]
          },
          {
            label: "Repression, Geheimdienst oder Unterdrueckung",
            variants: [
              "repression",
              "unterdrückung",
              "geheimdienst",
              "überwachung",
              "goli otok",
              "gegner ausschalten"
            ]
          },
          {
            label: "föderales Austarieren der Teilrepubliken",
            variants: [
              "föderal",
              "teilrepubliken",
              "autonomie",
              "ausgleich",
              "balancieren",
              "machtbalance"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Tito hielt Jugoslawien mit autoritärer Parteiherrschaft, Repression gegen Gegner und einem föderal austarierten System zusammen. Die Spannungen verschwanden dadurch nicht, wurden aber politisch kontrolliert und unterdrückt."
      },
      {
        id: "q-vorgeschichte-2",
        type: "short-text",
        challenge: "Strukturverständnis",
        prompt:
          "Warum wirkte die föderale Struktur Jugoslawiens stabil, obwohl sie langfristig konfliktanfällig blieb?",
        help:
          "Sofortkorrektur erkennt auch Synonyme. Verbinde Staatsaufbau mit wirtschaftlichen und nationalen Spannungen.",
        placeholder: "Die föderale Struktur wirkte stabil, weil ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-2"],
        conceptGroups: [
          {
            label: "Stabilitaet war teilweise nur politisch erzwungen",
            variants: [
              "erzwungen",
              "nur scheinbar stabil",
              "unterdrückt",
              "oberflaechlich",
              "eingefroren",
              "nicht gelöst"
            ]
          },
          {
            label: "regionale oder wirtschaftliche Ungleichheit",
            variants: [
              "ungleichheit",
              "wirtschaftlich",
              "reiche und arme regionen",
              "tourismus",
              "nord sued",
              "ungleiche entwicklung"
            ]
          },
          {
            label: "nationalistische Interessen blieben erhalten",
            variants: [
              "nationalismus",
              "ethnische spannungen",
              "serbisch",
              "kroatisch",
              "slowenisch",
              "volksgruppen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Föderation wirkte stabil, weil Tito Konflikte politisch kontrollierte und nach aussen Einigkeit inszenierte. Gleichzeitig blieben wirtschaftliche Ungleichheiten und nationale Interessen bestehen, sodass die Ordnung nach seinem Tod zunehmend fragil wurde."
      },
      {
        id: "q-vorgeschichte-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Entwicklungsschritte so, dass die lange Vorgeschichte des Zerfalls sichtbar wird.",
        help:
          "Beginne mit dem Attentat von Sarajevo und ende mit dem Symboljahr 1990.",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1"],
        items: [
          {
            id: "sarajevo-1914",
            label: "Das Attentat von Sarajevo macht den Balkan zum Auslöser einer gesamteuropäischen Krise.",
            detail: "1914 wird die Region zum Schauplatz eines weltpolitischen Umbruchs."
          },
          {
            id: "ustasa-ww2",
            label: "Im Zweiten Weltkrieg verstaerken Ustascha-Terror und Besatzung die interethnischen Traumata.",
            detail: "Gewalterfahrungen prägen das kollektive Gedächtnis über Jahrzehnte."
          },
          {
            id: "tito-1945",
            label: "Titos Partisanen setzen sich durch und bauen das sozialistische Jugoslawien auf.",
            detail: "Nach 1945 entsteht ein neuer Vielvölkerstaat unter kommunistischer Führung."
          },
          {
            id: "stalin-1948",
            label: "Der Bruch mit Stalin macht Jugoslawien zu einem Sonderfall zwischen Ost und West.",
            detail: "1948 veraendert sich die internationale Stellung des Staates grundlegend."
          },
          {
            id: "amselfeld-1989",
            label: "Milosevic mobilisiert 1989 mit nationaler Symbolpolitik auf dem Amselfeld.",
            detail: "Geschichte wird offen für gegenwaertige Machtpolitik instrumentalisiert."
          },
          {
            id: "zagreb-1990",
            label: "Das Fussballspiel Dinamo Zagreb gegen Roter Stern Belgrad wird 1990 zum Symbol der Eskalation.",
            detail: "Die gesellschaftliche Polarisierung schlaegt sichtbar in offene Konfrontation um."
          }
        ],
        correctOrder: [
          "sarajevo-1914",
          "ustasa-ww2",
          "tito-1945",
          "stalin-1948",
          "amselfeld-1989",
          "zagreb-1990"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass der Zerfall Jugoslawiens nicht aus dem Nichts kam. Langzeitkonflikte, Kriegsgewalt, autoritäre Stabilisierung und nationale Mobilisierung griffen ineinander."
      },
      {
        id: "q-vorgeschichte-4",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Beurteile, ob die Vorgeschichte Jugoslawiens den Krieg später fast zwangsläufig machte oder ob erst politische Akteure der späten 1980er und frühen 1990er Jahre die Eskalation auslösten. Begründe mit Materialbezügen.",
        help:
          "Wichtig ist eine klare These: historische Altlasten allein reichen nicht als Erklärung, aber sie duerfen auch nicht ausgeblendet werden.",
        placeholder: "Die Vorgeschichte schuf Voraussetzungen, doch ...",
        teacherPrompt:
          "Achte darauf, dass Lernende zwischen Strukturbedingungen und politischer Zuspitzung unterscheiden.",
        commonPitfall:
          "Haefig wird nur auf uralte Feindschaften verwiesen, ohne die Rolle von Propaganda, Machtkampf und Krisenpolitik zu gewichten.",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1", "r-vorgeschichte-yt-2"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["tito", "amselfeld", "nationalismus", "foederation", "sarajevo", "goli otok"],
        rubric: [
          { concept: "Langzeitkonflikte oder historische Traumata", keywords: ["vorgeschichte", "traumata", "zweiter weltkrieg", "ustascha", "1914", "langfristig"] },
          { concept: "autoritäre Stabilisierung unter Tito", keywords: ["tito", "repression", "unterdrückung", "föderal", "stabilisierung", "kommunistisch"] },
          { concept: "politische Instrumentalisierung durch Eliten", keywords: ["milosevic", "nationalismus", "propaganda", "mobilisierung", "machtkampf", "elite"] },
          { concept: "Abwaegung zwischen Struktur und Handlung", keywords: ["nicht automatisch", "nicht zwangsläufig", "einerseits", "andererseits", "zugleich", "während"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "entscheidend", "insgesamt", "meine these", "ich bewerte"] }
        ],
        modelAnswer:
          "Die Vorgeschichte machte Gewalt moeglich, aber nicht unausweichlich. Titos Staat hielt Konflikte durch Repression und Balancepolitik zusammen, ohne sie zu lösen. Erst als politische Akteure wie Milosevic historische Traumata und nationalistische Symbole bewusst mobilisierten, wurden alte Konfliktlinien in konkrete Kriegspolitik übersetzt."
      }
    ]
  },
  {
    id: "zerfall",
    step: "2",
    title: "Vom Nationalismus zum Krieg",
    era: "1989 bis 1992",
    intro:
      "Diese Station verfolgt den Übergang von Krise zu offener Gewalt. Im Zentrum stehen Machtpolitik, Medienpropaganda, die Kriege in Slowenien und Kroatien sowie die Frage, warum Europa so spät und so uneinheitlich reagierte.",
    goal:
      "Du kannst erklären, wie politische Führungen, mediale Feindbilder und militärische Entscheidungen aus einer Staatskrise bewaffnete Konflikte machten.",
    route:
      "Arbeite zuerst mit Folge 2 der Doku, sichere dann die Kernbegriffe mit den kurzen Antworten und ordne anschließend die Zuspitzung 1990 bis 1992. Die Transferfrage verlangt eine Gewichtung der internationalen Reaktion.",
    teacherNote:
      "Didaktisch stark ist hier der Wechsel zwischen politischer Akteursanalyse und der Frage nach dem Versagen europäischer Krisenprävention.",
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit Zwischenstopp zur Chronologie",
        "Partnervergleich zur Propagandafrage",
        "Plenumsdiskussion zur Rolle Europas"
      ],
      assessmentFocus: [
        "Nationalismus als politisch genutztes Instrument verstehen",
        "Medienpropaganda als Eskalationsfaktor einordnen",
        "Anerkennungspolitik und Nichtstun Europas differenziert beurteilen"
      ],
      misconceptions: [
        "Der Krieg sei ploetzlich ausgebrochen",
        "Medien seien nur Begleitung und nicht Teil der Eskalation gewesen",
        "Europa habe gar keine Handlungsoptionen gehabt"
      ],
      product:
        "Kurzkommentar zur Frage, ob politisches Zögern oder vorschnelle Anerkennung schwerer wog.",
      extension:
        "Die Station laesst sich gut mit einer Kartenarbeit zu Slowenien, Kroatien und Bosnien verbinden."
    },
    prompts: [
      "Achte auf Unterschiede zwischen Milosevics und Tudjmans Politikzielen.",
      "Notiere Beispiele dafür, wie Fernsehen und Propaganda Feindbilder verdichteten.",
      "Unterscheide zwischen Slowenien, Kroatien und Bosnien: Nicht jeder Konflikt folgte derselben Logik.",
      "Halte fest, wo europäische Diplomatie zögerte und wo sie durch Entscheidungen neue Folgen auslöste.",
      "Nutze die Porträts von Milošević und Tuđman, um Führungsfiguren des Zerfalls konkreter zu verorten."
    ],
    resources: [
      {
        id: "r-zerfall-doku-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 2: Ein Land zerfaellt",
        focus: "Nationalismus, Propaganda, Kroatienkrieg, Bosnien und internationale Reaktionen",
        link: "https://www.dropbox.com/scl/fi/euklg1q25mcmsqurroa9n/Balkan-in-Flammen-Ein-Land-zerf-llt-Staffel-1-Folge-2.mp4?rlkey=480olq20vrdtf0g3a5fnomrmr&st=69p85xwk&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-zerfall-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Leitfragen zu Propaganda, Kriegsausbruch, Voelkerarmee, Vukovar und Bosnien",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-zerfall-yt-3",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 3",
        focus: "ergänzender Erklärimpuls zur Staatskrise 1990/91",
        link: "https://www.youtube.com/watch?v=Fm-pdnVz8EY&list=PL8991DFCF33730589&index=3",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-zerfall-yt-4",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 4",
        focus: "zusätzliche Perspektive auf Kriegsausbruch und internationale Politik",
        link: "https://www.youtube.com/watch?v=sT_09hb1kzQ&list=PL8991DFCF33730589&index=4",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-zerfall-milosevic",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Slobodan Milošević in Den Haag",
        focus: "Porträt des serbischen Machtpolitikers, dessen Nationalismus und Zentralisierungspolitik den Zerfall entscheidend zuspitzten; das Bild verweist zugleich auf spätere internationale Strafverfolgung.",
        link: "assets/module-images/milosevic-in-hague.jpg",
        imageAlt: "Slobodan Milošević im Gerichtssaal in Den Haag",
        tags: ["lokal", "Bildquelle", "Akteur"]
      },
      {
        id: "r-zerfall-tudjman",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Franjo Tuđman 1995",
        focus: "Porträt des kroatischen Präsidenten, dessen Politik der Staatsgründung und nationalen Symbolik den Zerfall Jugoslawiens auf kroatischer Seite prägte.",
        link: "assets/module-images/franjo-tudjman-1995.jpg",
        imageAlt: "Franjo Tuđman im Jahr 1995",
        tags: ["lokal", "Bildquelle", "Akteur"]
      }
    ],
    questions: [
      {
        id: "q-zerfall-1",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Erkläre knapp, wie sich Milosevic und Tudjman in Zielen und politischer Strategie unterschieden.",
        help:
          "Die Sofortkorrektur erwartet keine Biographien, sondern einen historischen Vergleich ihrer Politik.",
        placeholder: "Milosevic und Tudjman unterschieden sich vor allem darin, dass ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-milosevic", "r-zerfall-tudjman"],
        conceptGroups: [
          {
            label: "serbische Zentralisierung oder Großserbien bei Milosevic",
            variants: [
              "großserbien",
              "serbischer nationalismus",
              "zentralisieren",
              "serbische dominanz",
              "serbische macht",
              "belgrad"
            ]
          },
          {
            label: "kroatische Unabhängigkeit oder Staatsgründung bei Tudjman",
            variants: [
              "unabhaengigkeit",
              "kroatischer nationalismus",
              "eigener staat",
              "kroatische souveränität",
              "abspaltung",
              "staatsgruendung"
            ]
          },
          {
            label: "historische Symbolpolitik oder Instrumentalisierung von Vergangenheit",
            variants: [
              "geschichtsbilder",
              "historische symbole",
              "traumata",
              "vergangenheit",
              "instrumentalisieren",
              "propaganda"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Milosevic verfolgte eine serbisch dominierte Zentralisierung beziehungsweise großserbische Politik, während Tudjman auf einen eigenständigen kroatischen Nationalstaat zielte. Beide arbeiteten mit historischer Symbolpolitik und nationaler Mobilisierung."
      },
      {
        id: "q-zerfall-2",
        type: "short-text",
        challenge: "Medienanalyse",
        prompt:
          "Warum war Propaganda, vor allem über das Fernsehen, ein zentraler Eskalationsfaktor?",
        help:
          "Nenne mindestens zwei Wirkungen. Synonyme für Feindbild, Angst, Mobilisierung und Legitimierung werden erkannt.",
        placeholder: "Propaganda war zentral, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Feindbilder und Angst wurden verstaerkt",
            variants: [
              "feindbild",
              "angst",
              "hass",
              "bedrohung",
              "demonisieren",
              "gegnerbild"
            ]
          },
          {
            label: "Gewalt oder Mobilisierung wurde legitimiert",
            variants: [
              "legitimieren",
              "mobilisieren",
              "aufhetzen",
              "rechtfertigen",
              "unterstuetzung für krieg",
              "gewalt vorbereiten"
            ]
          },
          {
            label: "komplexe Konflikte wurden national vereinfacht",
            variants: [
              "vereinfachen",
              "wir gegen sie",
              "nationalistisch",
              "polarisiert",
              "schwarz weiss",
              "vereinseitigen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Propaganda verstaerkte Angst und Feindbilder, polarisierte die Gesellschaft in nationale Lager und schuf Zustimmung für Gewalt. Fernsehen wirkte dabei nicht nur informierend, sondern mobilisierend und legitimierend."
      },
      {
        id: "q-zerfall-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Zuspitzung des Zerfalls von 1990 bis 1992 in eine schluessige Reihenfolge.",
        help:
          "Beginne mit dem Fussballspiel von Zagreb und ende mit dem Beginn der Belagerung Sarajevos.",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-3"],
        items: [
          {
            id: "zagreb-1990",
            label: "Das Fussballspiel in Zagreb im Mai 1990 wird zum Symbol der eskalierenden Polarisierung.",
            detail: "Gesellschaftliche Gewalt ist bereits vor dem offenen Krieg sichtbar."
          },
          {
            id: "slowenien-1991",
            label: "Der Zehn-Tage-Krieg in Slowenien zeigt 1991 die militärische Krise des Bundesstaats.",
            detail: "Der schnelle Konflikt legt Schwachstellen der jugoslawischen Volksarmee offen."
          },
          {
            id: "vukovar-1991",
            label: "Die Belagerung und Zerstörung Vukovars radikalisiert den Kroatienkrieg im Herbst 1991.",
            detail: "Das Bild des Krieges veraendert sich international deutlich."
          },
          {
            id: "anerkennung-1991",
            label: "Deutschland und weitere Staaten erkennen Kroatien und Slowenien Ende 1991 beziehungsweise Anfang 1992 an.",
            detail: "Aussenpolitik greift nun offen in die Zerfallslage ein."
          },
          {
            id: "referendum-bosnien-1992",
            label: "Bosnien-Herzegowina stimmt 1992 über die Unabhängigkeit ab.",
            detail: "Damit verschiebt sich der Konfliktschwerpunkt nach Bosnien."
          },
          {
            id: "sarajevo-1992",
            label: "Mit dem Beginn der Belagerung Sarajevos wird der Bosnienkrieg weltweit sichtbar.",
            detail: "Der Krieg trifft nun eine multiethnische Hauptstadt mit voller Härte."
          }
        ],
        correctOrder: [
          "zagreb-1990",
          "slowenien-1991",
          "vukovar-1991",
          "anerkennung-1991",
          "referendum-bosnien-1992",
          "sarajevo-1992"
        ],
        explanation:
          "Die Chronologie zeigt, wie aus Polarisierung, gescheiterter Bundesgewalt, internationaler Anerkennung und Bosniens Unabhängigkeit ein neuer und noch komplexerer Krieg entstand."
      },
      {
        id: "q-zerfall-4",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Bewerte die Rolle Europas zu Beginn des Zerfalls: Überwog politisches Zögern oder richteten einzelne Entscheidungen wie die Anerkennung Kroatiens und Sloweniens zusätzlichen Schaden an? Begründe mit Materialbezügen.",
        help:
          "Eine starke Antwort verbindet Diplomatie, Nichtstun, Anerkennungspolitik und Kriegsfolgen miteinander.",
        placeholder: "Europas Rolle war widerspruechlich, weil ...",
        teacherPrompt:
          "Die Antwort sollte nicht monokausal sein. Beides kann zugleich gelten: zu spät reagieren und dann mit riskanten Entscheidungen handeln.",
        commonPitfall:
          "Häufig wird nur verurteilt oder entschuldigt, ohne die unterschiedlichen Phasen europäischer Politik zu unterscheiden.",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-3", "r-zerfall-yt-4"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["europa", "anerkennung", "vukovar", "slowenien", "kroatien", "bosnien"],
        rubric: [
          { concept: "Zögern oder Unentschlossenheit Europas", keywords: ["zögern", "untätig", "uneinheitlich", "spät", "diplomatie", "nicht eingegriffen"] },
          { concept: "Anerkennungspolitik als Eingriff", keywords: ["anerkennung", "slowenien", "kroatien", "deutschland", "europäische staaten", "früh"] },
          { concept: "Folgen für die Kriegsdynamik", keywords: ["eskalation", "folge", "krieg", "konsequenz", "zuspitzung", "gewalt"] },
          { concept: "Differenzierung statt Einzelfaktor", keywords: ["einerseits", "andererseits", "zugleich", "während", "nicht nur", "mehrere faktoren"] },
          { concept: "historisches Urteil", keywords: ["ich bewerte", "entscheidend", "insgesamt", "deshalb", "meine these"] }
        ],
        modelAnswer:
          "Europa reagierte zunächst zu zögerlich und uneinheitlich auf die Zuspitzung. Zugleich wirkten einzelne Entscheidungen wie die Anerkennungspolitik nicht befriedend, sondern griffen in einen bereits eskalierenden Konflikt ein. Entscheidend ist deshalb weniger eine einfache Schuldzuweisung als die Einsicht, dass Unentschlossenheit und riskante Intervention nebeneinanderstanden."
      }
    ]
  },
  {
    id: "bosnienkrieg",
    step: "3",
    title: "Bosnienkrieg, Sarajevo und Srebrenica",
    era: "1992 bis 1995",
    intro:
      "Im Zentrum dieser Station steht der Bosnienkrieg als radikalste Phase des Zerfalls. Behandelt werden ethnische Säuberungen, die Belagerung Sarajevos, das Versagen der UN und der Einschnitt von Srebrenica.",
    goal:
      "Du kannst zentrale Formen der Gewalt im Bosnienkrieg erklären, Sarajevo als Symbolraum deuten und Srebrenica als Wendepunkt internationaler Wahrnehmung einordnen.",
    route:
      "Nutze Folge 3 der Doku als Hauptquelle, arbeite den Wikipedia-Artikel zum Bosnienkrieg gezielt mit und verwende die beiden Sarajevo-Bilder für visuelle Deutungen. Die Transferfrage verbindet Bildanalyse mit Kriegsverlauf und Nachkriegsrealitaet.",
    teacherNote:
      "Die Station verlangt besonders sorgsame Begleitung, weil sie mit Massengewalt, Belagerung und Genozid arbeitet. Bilddeutung und Begriffssicherung sollten klar voneinander getrennt werden.",
    teacherToolkit: {
      duration: "45 bis 60 Minuten",
      socialForms: [
        "Ruhige Einzelarbeit mit klaren Arbeitsphasen",
        "Partnervergleich nur nach der Bilddeutung",
        "Plenumssicherung zu Sarajevo, Srebrenica und UN-Mandat"
      ],
      assessmentFocus: [
        "ethnische Säuberung als gezielte Kriegsstrategie verstehen",
        "Sarajevo nicht nur als Opferbild, sondern als Symbolraum deuten",
        "UN-Versagen, Srebrenica und NATO-Intervention miteinander verknuepfen"
      ],
      misconceptions: [
        "Bosnienkrieg sei nur ein chaotischer Buergerkrieg ohne Planung gewesen",
        "Srebrenica sei ein isoliertes Einzelereignis",
        "Sarajevo stehe nur für Zerstörung und nicht auch für multiethnisches Zusammenleben"
      ],
      product:
        "Bildgestuetzte Transferantwort oder kommentierte Chronologie der Eskalation 1992 bis 1995.",
      extension:
        "Mit einer Zusatzfrage arbeiten: Warum wurde gerade Sarajevo weltweit zu einem Bild des Krieges?"
    },
    visual: {
      src: "assets/module-images/sarajevo-grbavica.jpeg",
      alt: "Zerstörte Gebäude im Sarajevoer Stadtteil Grbavica nach dem Krieg",
      sourceLabel: "Sarajevo_Grbavica.jpeg"
    },
    prompts: [
      "Achte auf die Verbindung von militärischer Strategie und Gewalt gegen Zivilisten.",
      "Notiere, warum Sarajevo weltweit zu einem Symbol des Bosnienkriegs wurde.",
      "Arbeite heraus, was mit ethnischer Säuberung konkret gemeint ist.",
      "Halte fest, warum Srebrenica und das Scheitern der UN später politischen Druck auf die NATO erhoehten.",
      "Ordne die Akteur*innenporträts ihren politischen und militärischen Rollen im Bosnienkrieg zu."
    ],
    resources: [
      {
        id: "r-bosnien-doku-3",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Bosnienkrieg, Srebrenica, NATO, Dayton, Kosovo und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-bosnien-wiki",
        bucket: "Artikel und Referenz",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Daten, Kriegsparteien, Verlauf, Belagerung Sarajevos, Srebrenica und Dayton",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"]
      },
      {
        id: "r-bosnien-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Fragen zu Sarajevo, Omarska, sexueller Gewalt, Srebrenica und internationaler Reaktion",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-bosnien-yt-5",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 5",
        focus: "ergänzender Impuls zum Bosnienkrieg und seiner Gewaltlogik",
        link: "https://www.youtube.com/watch?v=Koy2LRZCT3Y&list=PL8991DFCF33730589&index=5",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-bosnien-yt-6",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 6",
        focus: "zusätzliche Perspektive auf internationale Intervention und Kriegswende",
        link: "https://www.youtube.com/watch?v=2Imx42AjXj0&list=PL8991DFCF33730589&index=6",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-bosnien-bild-1",
        bucket: "Bildquellen",
        type: "Bild",
        title: "Sarajevo Grbavica",
        focus: "Zerstörter Stadtraum als Spur von Belagerung, Frontverlauf und Kriegsfolgen",
        link: "assets/module-images/sarajevo-grbavica.jpeg",
        tags: ["lokal", "Bildquelle"]
      },
      {
        id: "r-bosnien-bild-2",
        bucket: "Bildquellen",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegssituation der Hauptstadt mit sichtbaren Einschlägen und Brüchen",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"]
      },
      {
        id: "r-bosnien-izetbegovic",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Alija Izetbegović",
        focus: "Porträt des Präsidenten von Bosnien-Herzegowina und zentralen politischen Vertreters des international anerkannten bosnischen Staates.",
        link: "assets/module-images/alija-izetbegovic.jpg",
        imageAlt: "Alija Izetbegović im Porträt",
        tags: ["lokal", "Bildquelle", "Akteur"]
      },
      {
        id: "r-bosnien-karadzic",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Radovan Karadžić, März 1994",
        focus: "Porträt des politischen Führers der bosnischen Serben, der eng mit ethnischer Säuberung, Belagerungspolitik und Srebrenica verbunden ist.",
        link: "assets/module-images/radovan-karadzic-1994.jpg",
        imageAlt: "Radovan Karadžić im März 1994",
        tags: ["lokal", "Bildquelle", "Akteur"]
      },
      {
        id: "r-bosnien-mladic",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Ratko Mladić 1993",
        focus: "Porträt des militärischen Kommandeurs der bosnisch-serbischen Kräfte, der für Belagerung, Kriegsverbrechen und Srebrenica zentral war.",
        link: "assets/module-images/ratko-mladic-1993.jpg",
        imageAlt: "Ratko Mladić im Jahr 1993",
        tags: ["lokal", "Bildquelle", "Akteur"]
      },
      {
        id: "r-bosnien-plavsic",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Biljana Plavšić",
        focus: "Porträt der bosnisch-serbischen Politikerin, die zur politischen Führung der Republika Srpska gehörte und für die politische Dimension des Krieges steht.",
        link: "assets/module-images/biljana-plavsic.jpeg",
        imageAlt: "Biljana Plavšić im Porträt",
        tags: ["lokal", "Bildquelle", "Akteur"]
      }
    ],
    questions: [
      {
        id: "q-bosnien-1",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp, was im Bosnienkrieg mit 'ethnischer Säuberung' gemeint ist.",
        help:
          "Die Sofortkorrektur erkennt verschiedene Formulierungen. Entscheidend ist, dass du Ziel und Mittel nennst.",
        placeholder: "Mit ethnischer Säuberung ist gemeint, dass ...",
        sourceIds: [
          "r-bosnien-doku-3",
          "r-bosnien-wiki",
          "r-bosnien-pdf",
          "r-bosnien-izetbegovic",
          "r-bosnien-karadzic",
          "r-bosnien-mladic",
          "r-bosnien-plavsic"
        ],
        conceptGroups: [
          {
            label: "gewaltsame Vertreibung oder Entfernung von Bevölkerung",
            variants: [
              "vertreibung",
              "zwangsumsiedlung",
              "verjagen",
              "entfernen",
              "deportation",
              "aus ihren gebieten treiben"
            ]
          },
          {
            label: "Gewalt, Terror oder Toetung als Mittel",
            variants: [
              "terror",
              "gewalt",
              "mord",
              "massaker",
              "lager",
              "vergewaltigung"
            ]
          },
          {
            label: "Ziel eines ethnisch homogenen Gebiets",
            variants: [
              "ethnisch homogen",
              "reinigen",
              "homogenes gebiet",
              "nur eine volksgruppe",
              "territoriale kontrolle",
              "homogenisierung"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Ethnische Säuberung bedeutete die gewaltsame Vertreibung unerwünschter Bevölkerungsgruppen, oft durch Terror, Lager, Mord oder sexuelle Gewalt. Ziel war die Schaffung ethnisch homogener Gebiete unter militärischer und politischer Kontrolle."
      },
      {
        id: "q-bosnien-2",
        type: "short-text",
        challenge: "Symbolverständnis",
        prompt:
          "Warum wurde die Belagerung Sarajevos zu einem Symbol des Bosnienkriegs?",
        help:
          "Verbinde Stadtraum, Zivilbevölkerung und internationale Wahrnehmung. Synonyme für Beschuss, Belagerung und Symbolraum werden erkannt.",
        placeholder: "Sarajevo wurde zum Symbol, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-bild-1", "r-bosnien-bild-2"],
        conceptGroups: [
          {
            label: "lange Belagerung oder dauerhafter Beschuss",
            variants: [
              "belagerung",
              "jahrelang",
              "dauernder beschuss",
              "artillerie",
              "scharfschützen",
              "eingekesselt"
            ]
          },
          {
            label: "Zivilisten oder Alltag der Stadt wurden direkt getroffen",
            variants: [
              "zivilisten",
              "alltag",
              "bevölkerung",
              "kinder",
              "stadtleben",
              "zivile opfer"
            ]
          },
          {
            label: "Sarajevo stand für multiethnisches Bosnien und internationale Sichtbarkeit",
            variants: [
              "multiethnisch",
              "weltoffen",
              "hauptstadt",
              "symbol",
              "Weltöffentlichkeit",
              "internationale aufmerksamkeit"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Sarajevo wurde zum Symbol, weil die Stadt jahrelang belagert und aus den Hügeln beschossen wurde, während Zivilisten ihren Alltag unter Lebensgefahr aufrechterhalten mussten. Zugleich stand die multiethnische Hauptstadt für das Bosnien, das im Krieg zerstört wurde und weltweit sichtbar war."
      },
      {
        id: "q-bosnien-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die wichtigsten Einschnitte des Bosnienkriegs von der Unabhängigkeit bis zum Friedensschluss.",
        help:
          "Beginne mit dem Unabhängigkeitsreferendum und ende mit Dayton.",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf", "r-bosnien-yt-6"],
        items: [
          {
            id: "referendum-1992",
            label: "Bosnien-Herzegowina stimmt 1992 über seine Unabhängigkeit ab.",
            detail: "Die politische Entscheidung loest eine neue Konfliktphase aus."
          },
          {
            id: "sarajevo-beginn-1992",
            label: "Kurz darauf beginnt die Belagerung Sarajevos.",
            detail: "Der Krieg wird an einer Hauptstadt exemplarisch sichtbar."
          },
          {
            id: "washington-1994",
            label: "Das Washingtoner Abkommen von 1994 beendet den Krieg zwischen Bosniaken und Kroaten.",
            detail: "Ein Teilkonflikt wird damit neu geordnet."
          },
          {
            id: "srebrenica-1995",
            label: "Im Juli 1995 kommt es zum Massaker von Srebrenica.",
            detail: "Das UN-Schutzversprechen scheitert auf dramatische Weise."
          },
          {
            id: "nato-1995",
            label: "Die NATO greift 1995 mit Luftangriffen gegen bosnisch-serbische Ziele ein.",
            detail: "Erst jetzt veraendert sich die militärische Dynamik deutlich."
          },
          {
            id: "dayton-1995",
            label: "Das Dayton-Abkommen beendet Ende 1995 den Krieg.",
            detail: "Der Frieden stoppt die Kämpfe, schreibt aber ethnische Trennung fort."
          }
        ],
        correctOrder: [
          "referendum-1992",
          "sarajevo-beginn-1992",
          "washington-1994",
          "srebrenica-1995",
          "nato-1995",
          "dayton-1995"
        ],
        explanation:
          "Die Abfolge macht deutlich, wie lange der Krieg trotz internationaler Präsenz andauerte und dass erst das Zusammenspiel aus Srebrenica, NATO-Eingriff und Verhandlungen Dayton möglich machte."
      },
      {
        id: "q-bosnien-4",
        type: "open-analysis",
        challenge: "Bilddeutung",
        prompt:
          "Deute die beiden Sarajevo-Bilder im Zusammenhang mit dem Bosnienkrieg: Was zeigen sie über Kriegsverlauf, Belagerung und die schwierige Nachkriegswirklichkeit? Beziehe die Doku und den Artikel zum Bosnienkrieg ein.",
        help:
          "Eine gute Antwort beschreibt nicht nur Zerstörung, sondern verbindet Bilddetails mit historischen Zusammenhängen und der Symbolkraft Sarajevos.",
        placeholder: "Die beiden Bilder zeigen nicht nur Schaeden, sondern ...",
        teacherPrompt:
          "Lernende sollten zwischen Beschreibung, historischer Einordnung und Deutung unterscheiden.",
        commonPitfall:
          "Viele Antworten bleiben auf der Ebene des Schocks über Zerstörung stehen und verbinden die Bilder nicht mit Belagerung, Zivilbevölkerung oder Nachkriegsordnung.",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-bild-1", "r-bosnien-bild-2"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["sarajevo", "belagerung", "grbavica", "zivilisten", "bosnienkrieg", "1996"],
        rubric: [
          { concept: "Beschreibung konkreter Kriegsfolgen im Stadtraum", keywords: ["zerstoerung", "einschuss", "ruine", "schaeden", "front", "stadtraum"] },
          { concept: "Verbindung zur Belagerung oder Gewalt gegen Zivilisten", keywords: ["belagerung", "beschuss", "scharfschützen", "artillerie", "zivilisten", "alltag"] },
          { concept: "Vergleich beider Bilder", keywords: ["wahrend", "im vergleich", "beide", "anders", "einerseits", "andererseits"] },
          { concept: "Nachkriegswirklichkeit oder fortbestehende Brüche", keywords: ["nachkrieg", "1996", "spuren", "brueche", "trauma", "nicht vorbei"] },
          { concept: "Symbolkraft Sarajevos", keywords: ["symbol", "hauptstadt", "multiethnisch", "Weltöffentlichkeit", "bosnien", "sichtbar"] }
        ],
        modelAnswer:
          "Die Bilder zeigen Sarajevo als Stadt, in der die Belagerung noch lange nach dem Waffenstillstand sichtbar bleibt. Das Grbavica-Foto macht Zerstörung und Frontnähe sichtbar, während das Bild von 1996 die scheinbare Rückkehr des Alltags mit fortbestehenden Kriegsspuren kontrastiert. So wird Sarajevo zugleich als Symbol der Gewalt gegen Zivilisten und als Ort einer brüchigen Nachkriegswirklichkeit lesbar."
      }
    ]
  },
  {
    id: "nachkrieg",
    step: "4",
    title: "Dayton, Kosovo und schwieriger Frieden",
    era: "1995 bis heute",
    intro:
      "Die letzte Station fragt nach den Folgen des Krieges: Warum war Dayton zugleich notwendig und problematisch? Weshalb verlagerte sich die Gewalt später in den Kosovo? Und welche Herausforderungen prägen die Staaten des ehemaligen Jugoslawiens bis heute?",
    goal:
      "Du kannst Frieden als ambivalente Ordnung erklären, den Kosovo-Konflikt in die Zerfallsgeschichte einordnen und langfristige Probleme von Versöhnung, Demokratie und Anerkennung benennen.",
    route:
      "Nutze die dritte Dokumentationsfolge für Dayton und Kosovo, sichere die Leitbegriffe mit den kurzen Antworten und ordne danach die späten Entwicklungen. Die Transferfrage verlangt ein historisches Urteil über internationale Intervention.",
    teacherNote:
      "Die Station ist besonders geeignet für Urteilsbildung: Frieden beenden, ohne Konflikte wirklich zu lösen, ist hier der zentrale Spannungsbogen.",
    teacherToolkit: {
      duration: "35 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit abschließender Urteilsdiskussion",
        "Partnerarbeit zur Frage nach Dayton",
        "Plenum mit Gegenüberstellung von Notwendigkeit und Problemfolgen"
      ],
      assessmentFocus: [
        "Dayton als Friedensschluss und Blockadeordnung zugleich erfassen",
        "Kosovo nicht als Nebenschauplatz, sondern als Fortsetzung ungelöster Konflikte verstehen",
        "internationale Intervention historisch abwaegen statt nur moralisch bewerten"
      ],
      misconceptions: [
        "Mit Dayton sei der gesamte Zerfall abgeschlossen gewesen",
        "Kosovo habe mit Bosnien nichts zu tun",
        "Intervention sei entweder ganz richtig oder ganz falsch gewesen"
      ],
      product:
        "Urteilsorientierter Kurzaufsatz zur Frage, ob internationale Intervention zu spät, aber dennoch entscheidend war.",
      extension:
        "Anschlussfaehig an Gegenwartsfragen von Erinnerungspolitik, EU-Perspektive und Anerkennung des Kosovo."
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Sarajevo im Mai 1996 als Bild einer brüchigen Nachkriegsordnung",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    prompts: [
      "Achte auf den Doppelcharakter von Dayton: Frieden schaffen und Spaltung verfestigen.",
      "Notiere, warum Kosovo nach 1995 nicht befriedet war.",
      "Unterscheide zwischen legaler, politischer und moralischer Bewertung internationaler Intervention.",
      "Halte langfristige Herausforderungen fest: Erinnerung, Demokratie, Anerkennung und Versöhnung.",
      "Nutze das Porträt Ibrahim Rugovas, um die Kosovo-Frage auch aus der Perspektive politischer und gewaltfreier Strategie zu betrachten."
    ],
    resources: [
      {
        id: "r-nachkrieg-doku-3",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Dayton, Operation Sturm, Kosovo, NATO-Intervention und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-nachkrieg-wiki",
        bucket: "Artikel und Referenz",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Friedensschluss 1995, Folgen der Kriegsphase und Kontext für die Nachordnung",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"]
      },
      {
        id: "r-nachkrieg-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Leitfragen zu Dayton, Kosovo, NATO und langfristigen Problemen der Nachfolgestaaten",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-nachkrieg-yt-7",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 7",
        focus: "zusätzlicher Impuls zu Nachgeschichte, Erinnerung und offenen Konfliktfolgen",
        link: "https://www.youtube.com/watch?v=l1bSS3EkWyg&list=PL8991DFCF33730589&index=7",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-nachkrieg-bild",
        bucket: "Bildquelle",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegsbild als Ausgangspunkt für die Frage nach Frieden mit sichtbaren Spuren des Krieges",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"]
      },
      {
        id: "r-nachkrieg-rugova",
        bucket: "Akteur*innen im Fokus",
        type: "Bild",
        title: "Dr. Ibrahim Rugova",
        focus: "Porträt des kosovo-albanischen Politikers, der lange eine gewaltfreie und diplomatische Strategie gegen serbische Herrschaft vertrat.",
        link: "assets/module-images/ibrahim-rugova.jpg",
        imageAlt: "Ibrahim Rugova vor Bücherregal und Kosovo-Flagge",
        tags: ["lokal", "Bildquelle", "Akteur"]
      }
    ],
    questions: [
      {
        id: "q-nachkrieg-1",
        type: "short-text",
        challenge: "Urteilsvorbereitung",
        prompt:
          "Warum war das Dayton-Abkommen gleichzeitig notwendig und problematisch?",
        help:
          "Nenne mindestens zwei Seiten des Abkommens. Synonyme für Kriegsende, Friedensschluss, Spaltung und Blockade werden erkannt.",
        placeholder: "Dayton war notwendig, weil ..., aber problematisch, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-wiki", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Dayton beendete den Krieg",
            variants: [
              "krieg beenden",
              "waffenstillstand",
              "frieden",
              "kämpfe stoppen",
              "friedensschluss",
              "gewalt beenden"
            ]
          },
          {
            label: "ethnische Teilung oder komplizierte Staatsstruktur wurde festgeschrieben",
            variants: [
              "ethnische spaltung",
              "zementiert",
              "komplizierter staat",
              "entitäten",
              "blockade",
              "teilungslogik"
            ]
          },
          {
            label: "langfristige politische Handlungsfähigkeit blieb eingeschränkt",
            variants: [
              "schwacher staat",
              "reformblockade",
              "schwerfällig",
              "instabil",
              "handlungsunfaehig",
              "politische blockade"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Dayton war notwendig, weil es die Kämpfe stoppte und einen Friedensrahmen schuf. Problematisch war aber, dass ethnische Teilung und eine schwerfällige Staatsstruktur festgeschrieben wurden, die Bosnien politisch bis heute belastet."
      },
      {
        id: "q-nachkrieg-2",
        type: "short-text",
        challenge: "Kontextualisierung",
        prompt:
          "Warum blieb der Kosovo nach Dayton ein Konfliktraum?",
        help:
          "Die Sofortkorrektur erkennt verschiedene Formulierungen. Verbinde ungeloste politische Fragen mit Repression und Strategiewechsel.",
        placeholder: "Der Kosovo blieb ein Konfliktraum, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-pdf", "r-nachkrieg-yt-7", "r-nachkrieg-rugova"],
        conceptGroups: [
          {
            label: "Kosovo war in Dayton nicht wirklich gelöst",
            variants: [
              "nicht gelöst",
              "offen geblieben",
              "kein thema in dayton",
              "ungelöste frage",
              "ausgeklammert",
              "nicht befriedet"
            ]
          },
          {
            label: "serbische Repression oder eingeschränkte Autonomie",
            variants: [
              "repression",
              "autonomie entzogen",
              "unterdrückung",
              "serbische kontrolle",
              "diskriminierung",
              "gewalt gegen albaner"
            ]
          },
          {
            label: "Radikalisierung oder Auftreten der UCK",
            variants: [
              "uck",
              "radikalisierung",
              "bewaffneter widerstand",
              "strategiewechsel",
              "gewaltspirale",
              "aufstand"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Kosovo blieb offen, weil Dayton die Frage nicht löste. Serbische Repression und der Verlust von Autonomie steigerten den Druck, sodass sich Teile der albanischen Bevölkerung radikalisierten und die UCK an Bedeutung gewann."
      },
      {
        id: "q-nachkrieg-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die spätere Zerfallsphase von Dayton bis zur Schwachstellung Milosevics.",
        help:
          "Beginne mit Dayton und ende mit den politischen Folgen nach dem NATO-Krieg.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        items: [
          {
            id: "dayton-1995",
            label: "1995 beendet das Dayton-Abkommen den Bosnienkrieg.",
            detail: "Der Frieden schafft Sicherheit, aber keine einfache Lösung."
          },
          {
            id: "sarajevo-1996",
            label: "1996 zeigt das Nachkriegsbild Sarajevos die sichtbaren Spuren eines formal beendeten Krieges.",
            detail: "Frieden und Zerstörung existieren nebeneinander."
          },
          {
            id: "uck",
            label: "Im Kosovo gewinnt der bewaffnete Widerstand der UCK an Bedeutung.",
            detail: "Die Konfliktlogik verschiebt sich in einen neuen Raum."
          },
          {
            id: "nato-1999",
            label: "1999 greift die NATO Serbien und Montenegro ohne UN-Mandat militärisch an.",
            detail: "Die Intervention bleibt bis heute rechtlich und politisch umstritten."
          },
          {
            id: "zivile-opfer",
            label: "Die Bombardierung verursacht zivile Opfer und schwere gesellschaftliche Schaeden.",
            detail: "Intervention bedeutet keinen konfliktfreien Eingriff."
          },
          {
            id: "milosevic-geschwaecht",
            label: "Trotz nationalistischer Mobilisierung wird Milosevic durch Krieg und Bombardierung langfristig geschwaecht.",
            detail: "Die Herrschaft verliert innenpolitisch an Stabilitaet."
          }
        ],
        correctOrder: [
          "dayton-1995",
          "sarajevo-1996",
          "uck",
          "nato-1999",
          "zivile-opfer",
          "milosevic-geschwaecht"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass Dayton den Zerfall nicht abschloss. Der Kosovo-Konflikt, die NATO-Intervention und ihre Folgen gehoeren zur späten, aber entscheidenden Phase der Jugoslawienkriege."
      },
      {
        id: "q-nachkrieg-4",
        type: "open-analysis",
        challenge: "Historisches Urteil",
        prompt:
          "Beurteile die Aussage: Die internationale Intervention kam auf dem Balkan zu spät, veraenderte die Kriegslogik aber dennoch entscheidend. Diskutiere diese These mit Blick auf Srebrenica, NATO und Dayton.",
        help:
          "Eine tragfaehige Antwort verbindet zeitliche Verspätung, politische Wirkung und bleibende Probleme der Friedensordnung.",
        placeholder: "Die internationale Intervention kam tatsächlich spät, aber ...",
        teacherPrompt:
          "Achte darauf, dass die Lernenden ein begründetes Urteil formulieren und nicht bei moralischer Zustimmung oder Ablehnung stehen bleiben.",
        commonPitfall:
          "Oft wird entweder nur die Verspätung betont oder nur die Wirksamkeit später Intervention. Historisch relevant ist gerade die Spannung zwischen beidem.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-wiki", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["srebrenica", "nato", "dayton", "kosovo", "intervention", "sarajevo"],
        rubric: [
          { concept: "Verspätung internationaler Reaktion", keywords: ["spät", "zu spät", "verzögert", "untätig", "srebrenica", "un mandats"] },
          { concept: "militärische oder politische Wirkung später Intervention", keywords: ["nato", "luftangriffe", "wendepunkt", "druck", "veraenderte", "krieg"] },
          { concept: "Dayton als Ergebnis und Begrenzung", keywords: ["dayton", "frieden", "abkommen", "spaltung", "notwendig", "problematisch"] },
          { concept: "Abwaegung von Nutzen und Kosten", keywords: ["zivile opfer", "ambivalent", "umstritten", "einerseits", "andererseits", "zugleich"] },
          { concept: "langfristige Folgen", keywords: ["versöhnung", "demokratie", "anerkennung", "erinnerung", "heute", "nachwirkt"] }
        ],
        modelAnswer:
          "Die Intervention kam in Bosnien eindeutig zu spät, was sich am Scheitern der UN und an Srebrenica zeigt. Dennoch veraenderten NATO-Druck und Dayton die Kriegslogik entscheidend, weil sie die Kämpfe stoppten und neue Machtverhaeltnisse schufen. Das Ergebnis blieb aber ambivalent, da Frieden erreicht wurde, ohne ethnische Spaltung und langfristige Instabilitaet wirklich zu überwinden."
      }
    ]
  }
];

window.YUGOSLAVIA_MODULES = MODULES;
