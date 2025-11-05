import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () =>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
            <ThemeToggle/>
            <div className="flex justify-center items-center h-screen text-4xl font-bold">
                Not <span className="text-primary"> Found</span>
            </div>

            <StarBackground/>
        </div>
    
    )
}
export default NotFound; 