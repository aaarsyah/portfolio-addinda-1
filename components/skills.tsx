import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function Skills() {
  const skills = {
    Design: [
      { name: "Canva", image: "https://freelogopng.com/images/all_img/1656733637logo-canva-png.png" },
      { name: "Figma", image: "https://i.pinimg.com/736x/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.jpg" },
      { name: "Meta Spark", image: "https://mir-s3-cdn-cf.behance.net/projects/404/6a1ab1114799831.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg" },
    ],
    Programming: [
      { name: "Android Studio", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Android_Studio_Logo_2024.svg/1200px-Android_Studio_Logo_2024.svg.png" },
      { name: "Kotlin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png" },
      { name: "Flutter", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png" },
      { name: "MySQL", image: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" },
      { name: "Java", image: "https://www.citypng.com/public/uploads/preview/hd-java-programming-logo-png-701751694771848sm650yaqjt.png" },
      { name: "Python", image: "https://e7.pngegg.com/pngimages/593/15/png-clipart-python-others-text-logo.png" },
      { name: "React Native", image: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg" },
      { name: "Git", image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" },
    ],
    "Collaboration Tools": [
      { name: "Jira", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png" },
      { name: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" },
      { name: "Microsoft Office", image: "https://w7.pngwing.com/pngs/734/792/png-transparent-microsoft-office-365-microsoft-excel-microsoft-office-2016-microsoft-text-rectangle-logo-thumbnail.png" },
      { name: "Trello", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png" },
    ],
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Expertise</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="animate-slide-up">
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="space-y-6">
                {items.map((skill, index) => (
                  <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                    <div className="flex items-center gap-4">
                      <Image src={skill.image} alt={skill.name} width={50} height={50} className="rounded-md object-cover" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 animate-fade-in animate-delay-500">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Responsive Design", "UI/UX Design", "WordPress", "SEO Optimization", "Brand Strategy", "Typography", "Color Theory", "Git/GitHub"].map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 50 + 600}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
