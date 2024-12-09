import { Typography } from "../atoms/Typography";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden p-6 bg-gradient-to-br from-purple-600 via-indigo-700 to-indigo-900 
                    rounded-lg shadow-lg transition-all duration-300 hover:scale-105 
                    hover:shadow-xl group cursor-pointer border border-white/10">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl 
                      group-hover:bg-indigo-400/20 transition-all duration-300" />
      
      <div className="relative flex flex-col items-start space-y-2">

        <div className="space-y-2">
          <Typography
            variant="heading"
            className="text-lg md:text-xl font-semibold text-white 
                       tracking-tight group-hover:translate-x-1 transition-transform"
          >
            {title}
          </Typography>
          <div className="h-0.5 w-16 bg-gradient-to-r from-pink-500 to-indigo-500 
                         rounded-full transform origin-left group-hover:scale-x-125 transition-transform" />
        </div>

        <Typography
          variant="body"
          className="text-sm md:text-base text-indigo-100/90 
                     group-hover:translate-x-1 transition-transform"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}