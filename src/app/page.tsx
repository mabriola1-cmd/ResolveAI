import Card from '../components/Card';

export default function Home() {
  const features = [
    { title: 'AI Mediation', text: 'Smart negotiation assistance to help both parties find common ground.' },
    { title: 'Professional Network', text: 'Verified lawyers, mediators, and arbitrators ready to finalize agreements.' },
    { title: 'Secure Documents', text: 'Encrypted storage for MOUs and agreements.' }
  ];
  return (
    <main className="container">
      <h1>ResolveAI — Fair outcomes, faster.</h1>
      <p className="lead">
        A new standard for dispute resolution. Save money, save time, and reach peaceful agreements.
      </p>
      <section className="grid">
        {features.map(f => (
          <Card key={f.title} title={f.title} text={f.text} />
        ))}
      </section>
    </main>
  );
}
