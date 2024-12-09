export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white shadow rounded transition-transform transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
