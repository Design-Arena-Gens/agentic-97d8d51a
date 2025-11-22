import Link from "next/link";

type Advantage = {
  title: string;
  description: string;
  badge?: string;
};

const keyAdvantages: Advantage[] = [
  {
    title: "Workflow cinématographique complet",
    description:
      "Genesis couvre la prévisualisation, la génération vidéo multiles scènes, la direction artistique et l'export en UHD, ce qui en fait la suite IA la plus cohérente pour un long métrage.",
    badge: "Suite tout-en-un"
  },
  {
    title: "Contrôle créatif avancé",
    description:
      "Systèmes de caméras virtuelles, contrôles de cohérence, styles personnalisés et fine-tuning à partir de vos propres rushs pour garantir une continuité visuelle sur 90 minutes."
  },
  {
    title: "Écosystème extensible",
    description:
      "API, intégrations Premiere/DaVinci, pipeline 3D, et Marketplace d'actifs pour combiner IA générative et post-production classique."
  }
];

const comparisonRows = [
  {
    platform: "Runway Gen-3 Alpha",
    strengths:
      "Qualité cinéma, animation multi-plans, temps de rendu compétitif, direction artistique pilotable",
    limits: "Toujours en alpha privée, file d'attente selon demande",
    budget: "Offres Pro & Enterprise (à partir de 35 $/mois + crédits)"
  },
  {
    platform: "Pika Labs",
    strengths: "Facilité d'usage, communauté active, rendu stylisé rapide",
    limits: "Moins de contrôle narratif et de cohérence longue durée",
    budget: "Freemium, plans Pro 58 $/mois"
  },
  {
    platform: "Luma Dream Machine",
    strengths: "Rendu réaliste, génération caméra libre, très bon pour plans courts",
    limits: "Pas de timeline avancée ni d'outils de storyboard",
    budget: "Crédits à l'usage"
  },
  {
    platform: "Stable Video Diffusion (open-source)",
    strengths: "Coût maîtrisé, self-hosting, possibilité de custom training",
    limits: "Infrastructure lourde, pipeline à développer soi-même",
    budget: "GPU dédié (>= 4 x A100) + maintenance"
  }
];

const productionRoadmap = [
  {
    title: "Développement & bible visuelle",
    description:
      "Utilisez Runway Storyboard + Notion pour structurer narration, moodboards et keyframes. Importez références photos et concept art."
  },
  {
    title: "Prévisualisation animatique",
    description:
      "Générez des séquences rough via Gen-3 Turbo pour valider découpages, pacing et intentions caméra avant itérations HD."
  },
  {
    title: "Production haute fidélité",
    description:
      "Passez en rendu 4K, verrouillez l'étalonnage, stabilisez les personnages via fine-tuning sur vos rushs référence."
  },
  {
    title: "Post-production & mixage",
    description:
      "Assemblez dans DaVinci Resolve, ajoutez VFX traditionnels si nécessaire, mixage Dolby Atmos via plugins IA (Adobe Speech Enhancement, ElevenLabs)."
  },
  {
    title: "Contrôle qualité & distribution",
    description:
      "QA collaborative dans Frame.io, vérification juridique (droits prompts/actifs), génération livrables DCP + localisation multilingue."
  }
];

const riskMitigation = [
  {
    risk: "Incohérence des personnages ou décors sur la durée",
    strategy:
      "Créer une bible de prompts verrouillés, entraîner un modèle personnalisé sur photo-shoot des acteurs, utiliser le mode keyframe-to-video pour transitions."
  },
  {
    risk: "Dérive stylistique entre séquences",
    strategy:
      "Utiliser LUTs de référence dès la préviz, verrouiller palettes dans Runway via styles persistants, audit visuel à chaque itération majeure."
  },
  {
    risk: "Limites légales sur droits d'auteur IA",
    strategy:
      "Documenter toutes les sources, privilégier données originales (photo, audio), inclure clause IA dans contrats talents et distribution."
  },
  {
    risk: "Budget GPU explosif en auto-hébergement",
    strategy:
      "Démarrer en SaaS Runway, n'activer un cluster dédié que pour renders spécifiques, monitorer crédits hebdomadairement."
  }
];

const toolStack = [
  {
    segment: "Narration & pré-production",
    tools: ["Runway Storyboard", "Notion", "Fable Diffusion", "ChatGPT + Canvas"]
  },
  {
    segment: "Génération vidéo principale",
    tools: ["Runway Gen-3 Alpha", "Runway Motion Brush", "Keyframe sequencing"]
  },
  {
    segment: "Post-production",
    tools: ["DaVinci Resolve Studio", "Topaz Video AI", "ElevenLabs Dubbing", "Adobe Audition"]
  },
  {
    segment: "Collaboration & QA",
    tools: ["Frame.io", "ShotGrid", "Airtable Production Template"]
  }
];

const faq = [
  {
    question: "Pourquoi privilégier Runway pour un long métrage complet ?",
    answer:
      "Runway Genesis combine génération, montage, gestion de styles, fine-tuning et pipeline d'export. Les autres solutions excellent sur certains points mais nécessitent de multiples outils auxiliaires pour couvrir l'ensemble du workflow."
  },
  {
    question: "Quel budget prévoir pour 90 minutes de film ?",
    answer:
      "Comptez 25 à 40k € en combinant abonnement Enterprise, crédits de rendu 4K, post-production audio et QA. Cela reste très inférieur à un tournage live-action traditionnel."
  },
  {
    question: "Peut-on obtenir une cohérence narrative sur 90 minutes ?",
    answer:
      "Oui, avec une bible de prompts, des modèles personnalisés et une supervision artistique rigoureuse. Les studios pionniers utilisent des pipelines hybrides mêlant IA et correction manuelle pour verrouiller continuité."
  },
  {
    question: "Comment accéder au programme Genesis Alpha ?",
    answer:
      "Soumettez un dossier via Runway Studios en détaillant synopsis, équipe, calendrier et intention artistique. Les projets longs méticuleusement préparés sont prioritaires."
  }
];

export default function Page() {
  return (
    <main className="main">
      <section className="hero">
        <span className="badge">Recommandation 2024</span>
        <h1 className="hero-title">
          Runway Genesis est la meilleure plateforme IA pour produire un long métrage ambitieux
        </h1>
        <p className="hero-subtitle">
          Après analyse des suites IA vidéo de pointe, Runway Gen-3 (programme Genesis) se démarque
          par sa maturité pipeline, ses outils de cohérence et son écosystème professionnel. Cette
          page fournit un plan d&apos;attaque complet pour passer de l&apos;idée au master DCP.
        </p>
        <div className="hero-cta">
          <Link
            className="primary"
            href="https://runwayml.com/studios/"
            target="_blank"
            rel="noreferrer"
          >
            Candidater au programme Genesis
          </Link>
          <Link
            className="ghost"
            href="https://research.runwayml.com/gen3"
            target="_blank"
            rel="noreferrer"
          >
            Lire le livre blanc Gen-3
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Pourquoi Runway ?</span>
          <h2 className="section-title">3 arguments décisifs pour un long métrage IA</h2>
          <p className="section-subtitle">
            La compétition se joue entre Runway, Pika, Luma et les pipelines open-source. Pour un
            film de 60 à 120 minutes, la stabilité, l&apos;organisation des assets et la continuité
            artistique priment sur la simple qualité d&apos;un plan isolé.
          </p>
        </div>
        <div className="grid grid-3">
          {keyAdvantages.map((advantage) => (
            <article key={advantage.title} className="card">
              {advantage.badge ? <span className="badge">{advantage.badge}</span> : null}
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Benchmark 2024</span>
          <h2 className="section-title">Comparaison condensée des plateformes IA vidéo</h2>
          <p className="section-subtitle">
            Les critères principaux : cohérence longue durée, pipeline de post-production, contrôle
            créatif et coûts. Runway Genesis domine la plupart des axes critiques.
          </p>
        </div>
        <div className="card" style={{ overflowX: "auto" }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Plateforme</th>
                <th>Points forts</th>
                <th>Limites</th>
                <th>Modèle économique</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.platform}>
                  <td>{row.platform}</td>
                  <td>{row.strengths}</td>
                  <td>{row.limits}</td>
                  <td>{row.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Feuille de route</span>
          <h2 className="section-title">
            Pipeline recommandé pour livrer un long métrage en 24 semaines
          </h2>
          <p className="section-subtitle">
            Une production IA performante reste un travail d&apos;équipe créatif. Ce plan combine
            la vitesse de génération avec des étapes de validation humaine incontournables.
          </p>
        </div>
        <div className="grid grid-2 steps">
          {productionRoadmap.map((step) => (
            <article key={step.title} className="card step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Maîtrise des risques</span>
          <h2 className="section-title">Anticiper les pièges des productions IA</h2>
          <p className="section-subtitle">
            Les productions pionnières combinent gouvernance, contrôle qualité et accès rapide aux
            équipes Runway. Mieux vaut prévenir que refaire 40 minutes de film.
          </p>
        </div>
        <div className="grid grid-2">
          {riskMitigation.map((item) => (
            <article key={item.risk} className="card">
              <h3>{item.risk}</h3>
              <p>{item.strategy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Stack conseillé</span>
          <h2 className="section-title">Outils essentiels pour structurer l&apos;équipe</h2>
          <p className="section-subtitle">
            Conservez un coeur Runway pour la génération, mais greffez des outils spécialisés sur
            l&apos;audio, la collaboration et la gestion documentaire.
          </p>
        </div>
        <div className="grid grid-2">
          {toolStack.map((segment) => (
            <article key={segment.segment} className="card">
              <h3>{segment.segment}</h3>
              <div className="chip-row">
                {segment.tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-title">Questions fréquentes des producteurs IA</h2>
          <p className="section-subtitle">
            Les réponses ci-dessous proviennent de retours d&apos;équipes ayant mené des projets IA
            ambitieux en 2023-2024.
          </p>
        </div>
        <div className="grid">
          {faq.map((item) => (
            <article key={item.question} className="card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Accélérer votre dossier Genesis</h2>
          <p>
            Consolidez votre pitch deck (synopsis, intentions, moodboards), préparez 3 minutes de
            séquences générées et détaillez la stratégie de distribution. Runway privilégie les
            projets capables de dialoguer avec les équipes R&amp;D et de pousser la Gen-3.
          </p>
          <p className="quote">
            « Les projets IA longs métrages retenus partagent la même recette : vision artistique
            forte, pipeline robuste, gouvernance juridique et plan de diffusion clair. »
          </p>
          <div className="hero-cta" style={{ marginTop: "2rem" }}>
            <Link
              className="primary"
              href="https://runwayml.com/studios/"
              target="_blank"
              rel="noreferrer"
            >
              Déposer un dossier Runway Studios
            </Link>
            <Link
              className="ghost"
              href="https://airtable.com/shrxI5CVAG6o63lx6"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger le template de dossier
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Mentorat IA Film</strong> — accompagnement stratégique pour producteurs, studios et
          storytellers.
        </div>
        <div>
          Mise à jour juillet 2024 — surveillez les changelogs Runway, Luma et Pika pour rester
          compétitif. Programme Genesis encore en <span className="beta-flag">beta privée</span>.
        </div>
      </footer>
    </main>
  );
}
