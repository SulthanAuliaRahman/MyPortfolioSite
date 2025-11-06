export const ProfileCard = () => {
  return (
    <div className="space-y-6 flex flex-col items-center text-center">
      <div className="relative w-40 h-40 rounded-full border-4 border-primary overflow-hidden">
        <img
          src="/profile/berjas.jpg"
          alt="Sulthan Aulia Rahman"
          className="w-full h-full object-cover"
        />
      </div>
  
      <h3 className="text-xl font-semibold">
        Passionate Developer with Many Interests
      </h3>

      <p className="text-muted-foreground">
        I’m Sulthan Aulia Rahman, a college student passionate
        about information technology | from web development and{" "}
        game development to{" "}
        artificial intelligence. Welcome to my portfolio!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button">
          Get In Touch!
        </a>
        <a
          href="/SulthanAuliaRahman_CV.pdf"
          className="px-6 py-2 rounded-full border border-primary text-primary
                     hover:bg-primary/10 transition-colors duration-300"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};
