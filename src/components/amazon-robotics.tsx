import { Inria_Serif, Inconsolata } from 'next/font/google';
import { useState } from 'react';

const inriaSerif = Inria_Serif({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    display: 'swap',
  });
  
const inconsolata = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
  });

const AmazonRoboticsContent = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'learnt' | 'reflection'>('work');

  return (
    <div className="relative pt-3 pb-8">
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveTab('work')}
          className={`px-5 py-3 rounded-xl border-2 border-black transition-all duration-150 flex-1 min-w-[140px] ${
            activeTab === 'work' 
              ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]'
              : 'bg-[#CCF1F5] text-gray-900 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
          }`}
        >
          <span className={`${inriaSerif.className} text-lg`}>What I Did</span>
        </button>
        <button
          onClick={() => setActiveTab('learnt')}
          className={`px-5 py-3 rounded-xl border-2 border-black transition-all duration-150 flex-1 min-w-[140px] ${
            activeTab === 'learnt'
              ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]'
              : 'bg-[#CCF1F5] text-gray-900 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
          }`}
        >
          <span className={`${inriaSerif.className} text-lg`}>What I Learnt</span>
        </button>
        <button
          onClick={() => setActiveTab('reflection')}
          className={`px-5 py-3 rounded-xl border-2 border-black transition-all duration-150 flex-1 min-w-[140px] ${
            activeTab === 'reflection'
              ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]'
              : 'bg-[#CCF1F5] text-gray-900 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
          }`}
        >
          <span className={`${inriaSerif.className} text-lg`}>Why I Won't Return</span>
        </button>
      </div>

      <div className={`${inconsolata.className} space-y-8 text-gray-900`}>
        {activeTab === 'work' ? (
          <>
            <div>
              <h3 className={`${inriaSerif.className} text-2xl font-bold mb-4`}>Edge Configuration Assembly: A Scalable Solution</h3>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                Each robot needs slightly different configurations based on its location, hardware components, and specific role in the facility. Sending complete configurations to each robot would mean transmitting gigabytes of largely redundant data across the network - a massive waste of bandwidth and a potential bottleneck for rapid updates.
              </p>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                The solution was to implement edge configuration assembly - instead of sending complete configurations, we send compact, targeted patch files containing only the key differences. The bulk of the configuration is assembled directly on the robot using these patches and a base template.
              </p>
            </div>

            <div>
              <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>Key Challenges</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li>Debugging configuration changes across multiple updates was difficult and time-consuming</li>
                <li>Patch files were large and inefficient, containing redundant information</li>
                <li>Network overhead from sending full configurations to each robot was significant</li>
              </ul>
            </div>

            <div>
              <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>Patch History: Better Debugging Through Visual Diffs</h4>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                I implemented a patch history feature that allows developers to track and visualize configuration changes across multiple updates. This made debugging significantly easier by providing a clear view of what changed and when.
              </p>
            </div>

            <div>
              <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>Powerful Patch Commands</h4>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                I introduced new patch command types that made configuration updates more powerful and concise. Here's an illustrative example with confidential information removed:
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border-2 border-black rounded-xl p-4">
                  <p className="font-bold mb-2">Before (200+ lines):</p>
                  <pre className="text-sm overflow-x-auto">
{`{
  "config": {
    "services": {
      "robot-1": {
        "image": "robot:v1",
        "tag": "old-tag"
      },
      "robot-2": {
        "image": "robot:v1",
        "tag": "old-tag"
      }
      // ... many more services
    }
  }
}`}
                  </pre>
                </div>
                <div className="border-2 border-black rounded-xl p-4">
                  <p className="font-bold mb-2">After (10 lines):</p>
                  <pre className="text-sm overflow-x-auto">
{`{
  "type": "update",
  "scope": "services/*",
  "operations": [
    {
      "find": "old-tag",
      "replace": "new-tag"
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </>
        ) : activeTab === 'learnt' ? (
          <div>
            <h3 className={`${inriaSerif.className} text-2xl font-bold mb-4`}>Scaling Lessons</h3>
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              This project exposed me to a scaling problem that only emerges at massive scale. While sending a few megabytes of configuration data to a single robot is manageable, the challenge transforms completely when dealing with millions of robots across different facilities.
            </p>
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              The key insight was that linear solutions don't always remain viable at scale. Our edge configuration assembly approach reduced network overhead by over 90% while maintaining the flexibility to customize configurations per robot. More importantly, it's a solution that scales linearly with the number of robots, making it viable for Amazon's growing robot fleet.
            </p>
            <div className="mt-8">
              <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>Technical Takeaways</h4>
              <ul className="list-disc list-inside space-y-4 ml-4 text-base sm:text-lg leading-relaxed">
                <li>
                  <strong>Think in Systems:</strong> Solutions need to consider the entire system, not just individual components
                </li>
                <li>
                  <strong>Efficiency at Scale:</strong> Small inefficiencies multiply dramatically at scale
                </li>
                <li>
                  <strong>Incremental Updates:</strong> The importance of designing systems that can be updated incrementally and safely
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <h3 className={`${inriaSerif.className} text-2xl font-bold mb-4`}>Why I Won't Return</h3>
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              While I thoroughly enjoyed working with my talented team at Amazon Robotics and learned invaluable lessons about scaling systems, I've decided to pursue opportunities elsewhere for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-4 ml-4 text-base sm:text-lg leading-relaxed">
              <li>
                <strong>Development Velocity:</strong> The approval processes and bureaucratic overhead meant that even small changes could take weeks to implement. Coming from a startup background where I could ship features daily, this pace felt restrictively slow.
              </li>
              <li>
                <strong>Limited Innovation Space:</strong> Despite working on interesting technical challenges, the scope for rapid experimentation was constrained by rigid processes and multiple layers of approval.
              </li>
              <li>
                <strong>Startup Appeal:</strong> I'm drawn to the fast-paced, high-impact environment of startups where I can wear multiple hats and see the direct impact of my work immediately. At my current startup, I can move fast, take calculated risks, and learn from quick iterations.
              </li>
              <li>
                <strong>Cultural Fit:</strong> While I deeply respect Amazon's leadership principles and the incredible people I worked with, I found myself missing the dynamic, experimental culture of smaller companies where decisions can be made and implemented rapidly.
              </li>
            </ul>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              This experience helped me realize that I thrive in environments where I can move quickly, take ownership of entire features, and see immediate impact - characteristics I've found more prevalent in the startup world.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmazonRoboticsContent;
