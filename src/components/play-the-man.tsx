import React, { useState } from 'react';
import { Inria_Serif, Inconsolata } from 'next/font/google';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

type SectionId = 'motivation' | 'setup' | 'randomizing' | 'responding' | 'discussion';

interface Section {
  id: SectionId;
  title: string;
}

const PlayTheManContent = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('motivation');
  
  const sections: Section[] = [
    { id: 'motivation', title: 'Motivation' },
    { id: 'setup', title: 'Problem Setup' },
    { id: 'randomizing', title: 'Randomizing Opponent' },
    { id: 'responding', title: 'Best Responding Opponent' },
    { id: 'discussion', title: 'Discussion' }
  ];
  
  const content: Record<SectionId, { title: string; content: JSX.Element }> = {
    motivation: {
      title: "1 MOTIVATION",
      content: (
        <div className={`${inconsolata.className} space-y-6 text-gray-900`}>
          <p className="text-lg">
            Behavioral economics has shown that people are not perfectly rational. In particular, humans often fall 
            prey to different biases. Examples include the gambler's fallacy, where a player believes that an outcome 
            is "overdue" if it has not been observed recently, or loss aversion, where a player is more sensitive to 
            losses than equivalent gains.
          </p>
          <p className="text-lg">
            Recent work by Blum et al. made several key contributions to understanding how to exploit biased opponents 
            in 2-player, zero-sum, symmetric games [2]. Working with games where payoffs are in {'{−1, 0, 1}'} and each 
            action is beaten by and beats another distinct action (which they term "permissive games"), they showed that: 
            (1) one can learn to play best responses against deterministically biased opponents without any knowledge of 
            the game matrix, (2) an agent with no information about the game matrix can win nearly every round, and (3) 
            it's possible to infer the specific bias an opponent is playing with through their actions (using a halving algorithm).
          </p>
          <p className="text-lg">
            A natural extension of this work is to consider opponents who have biased beliefs about how we'll play 
            (i.e., a biased probability distribution) but are otherwise rational. We tackle this setting in two 
            different ways:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg pl-4">
            <li>We consider a stochastic opponent who plays the best response to action x with probability proportional 
            to how likely they think we are to play x</li>
            <li>We remove the restriction that payoffs must be in {'{−1, 0, 1}'}, allowing for more general game matrices 
            where the opponent may want to hedge against multiple possible actions</li>
          </ol>
          <p className="text-lg">
            To illustrate how non-binary payoffs lead to richer strategic choices, consider the following example
            in rock-paper-scissors:
          </p>
          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <p className={`${inriaSerif.className} text-xl font-bold mb-4 text-black`}>Example 1.1</p>
            <p className="mb-4">Consider a modified rock-paper-scissors game where the opponent's payoff matrix is:</p>
            <div className="overflow-x-auto">
              <table className="min-w-[300px] border-collapse text-center">
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    <th className="p-2 border-b-2 border-black">Rock</th>
                    <th className="p-2 border-b-2 border-black">Paper</th>
                    <th className="p-2 border-b-2 border-black">Scissors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-r-2 border-black font-medium">Rock</td>
                    <td className="p-2">0</td>
                    <td className="p-2">-2</td>
                    <td className="p-2">1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r-2 border-black font-medium">Paper</td>
                    <td className="p-2">2</td>
                    <td className="p-2">0</td>
                    <td className="p-2">-1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r-2 border-black font-medium">Scissors</td>
                    <td className="p-2">-1</td>
                    <td className="p-2">1</td>
                    <td className="p-2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Suppose the (biased) opponent believes we'll play rock with a 5/8 probability and scissors with a 3/8 probability. 
              Then, in a traditional Rock-Paper-Scissors game, they would choose to play Rock (getting an expected 
              payoff of 3/8). However, with the payoffs above, the opponent would instead choose to play Paper (getting 
              an expected payoff of 7/8). So, the best response to a distribution in such as game would differ from the best 
              response to the most likely action in the distribution.
            </p>
          </div>
        </div>
      )
    },
    setup: {
      title: "2 PROBLEM SETUP",
      content: (
        <div className={`${inconsolata.className} space-y-6 text-gray-900`}>
          <p className="text-lg">
            We study repeated two-player, zero-sum symmetric games where a player can observe their opponent's 
            actions but does not have access to the payoffs or prior knowledge of the game matrix. This framework 
            serves as a complement to the bandit setting, where the payoffs are observable but the opponent's actions 
            are hidden.
          </p>
          
          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>2.1 Common Framework</h3>
            <p className="mb-4">In both settings we study:</p>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>Let A = {'{1, 2, ..., n}'} be a set of n actions.</li>
              <li>
                Let f : A<sup>t</sup> → Δ(A) be a function that maps the player's historical actions to a distribution over 
                actions, where:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>f(∅) is the uniform distribution over A</li>
                  <li>f(a, S<sub>t</sub>) denotes the ath element of the distribution f(S<sub>t</sub>)</li>
                  <li>S<sub>t</sub> ∈ A<sup>t</sup> represents the player's historical actions up to time t</li>
                </ul>
              </li>
              <li>
                Let M be an n × n matrix satisfying for all actions i, j ∈ A:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Skew symmetry: M<sub>ij</sub> = -M<sub>ji</sub></li>
                  <li>Zero diagonal: M<sub>ii</sub> = 0</li>
                </ul>
              </li>
              <li>
                At each time step t + 1:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>The player selects action a<sub>t+1</sub> ∈ A</li>
                  <li>The opponent forms belief f(·, S<sub>t</sub>) about our next action</li>
                  <li>The player's payoff is given by M<sub>a<sub>t+1</sub>,a<sub>t+1</sub><sup>opp</sup></sub></li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] mt-6">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>2.2 Key Differences</h3>
            <p className="mb-4">The two settings differ in the following aspects:</p>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                Payoff Structure:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Randomizing Opponent: Payoffs restricted to {'{-1, 0, 1}'}</li>
                  <li>Best Responding Opponent: Payoffs bounded but not restricted to {'{-1, 0, 1}'}</li>
                </ul>
              </li>
              <li>
                Opponent Behavior:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Randomizing Opponent: Plays the best response to action x with probability f(x, S<sub>t</sub>)</li>
                  <li>Best Responding Opponent: Plays to maximize expected utility against the believed distribution f(·, S<sub>t</sub>)</li>
                </ul>
              </li>
              <li>
                Learning Objective:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Randomizing Opponent: Learn best responses through frequency analysis</li>
                  <li>Best Responding Opponent: Learn the game matrix through boundary points</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      )
    },
    randomizing: { 
      title: "3 OPPONENT RANDOMIZES AT EVERY STEP", 
      content: (
        <div className={`${inconsolata.className} space-y-6 text-gray-900`}>
          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>3.1 Assumptions for Randomizing Opponent</h3>
            <p className="mb-4">For this setting, we make two key assumptions about the bias function f:</p>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                We can construct a sequence of actions S<sub>t</sub> such that f(S<sub>t</sub>) outputs a <em>peaked distribution</em> where 
                one action x has probability p* {'>'} p, while all other actions have equal probability p. That is, for any action x ��� A, 
                we can find an S<sub>t</sub> where:
                <div className="my-4 pl-8">
                  f(x, S<sub>t</sub>) = p* and f(a, S<sub>t</sub>) = p for all a ≠ x
                </div>
                where p* {'>'} p and p = (1-p*)/(n-1) to ensure the probabilities sum to 1. Note that when payoffs are restricted 
                to {'{-1, 0, 1}'}, the best response to such a peaked distribution is the same as the best response to the most 
                likely action in the distribution.
              </li>
              <li>
                The bias function f is either periodic or can be repeatedly manipulated to produce the above peaked distribution 
                multiple times, allowing us to gather sufficient samples of the opponent's responses.
              </li>
            </ol>
            <p className="mt-4">
              These assumptions ensure that we can reliably create situations where the opponent believes one action is more 
              likely than others, enabling us to learn their best responses through repeated observations.
            </p>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>3.2 Analysis for Randomizing Opponent</h3>
            <p className="mb-4">
              Following from our problem setup in Section 2, we focus on the case where the opponent plays the best response 
              to the player's action x with probability f(x, S<sub>t</sub>). That is, a<sup>opp</sup><sub>t+1</sub> = BR(x) with 
              probability f(x, S<sub>t</sub>).
            </p>

            <div className="mb-6">
              <p className="font-bold mb-2">Definition:</p>
              <p>
                The <em>degree of bias</em>, denoted b(n), of a function f: A<sup>t</sup> → Δ(A) is the ratio of p* to p in the 
                peaked distribution, where p* is the probability of the most likely action and p = (1-p*)/(n-1) is the probability 
                assigned to all other actions. That is:
              </p>
              <div className="my-4 pl-8">
                b(n) = p*/p = p*(n-1)/(1-p*)
              </div>
            </div>

            <div className="mb-6">
              <p className="font-bold mb-2">Key Results:</p>
              <p>
                For different classes of b(n), we can determine how quickly we can learn the opponent's best response to a given action:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse text-center">
                  <thead>
                    <tr>
                      <th className="p-2 border-b-2 border-black">Class of b(n)</th>
                      <th className="p-2 border-b-2 border-black">Description</th>
                      <th className="p-2 border-b-2 border-black">Required Differences</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Constant</td>
                      <td className="p-2">b(n) {'>'} 1</td>
                      <td className="p-2">O(log(n))</td>
                    </tr>
                    <tr>
                      <td className="p-2">Exponential</td>
                      <td className="p-2">b(n) = c<sup>n</sup>, c {'>'} 1</td>
                      <td className="p-2">O(log(n)/n)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Polynomial</td>
                      <td className="p-2">b(n) = n<sup>k</sup>, k {'>'} 0</td>
                      <td className="p-2">O(1)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Approaching 1</td>
                      <td className="p-2">b(n) = n<sup>k</sup>/(n<sup>k</sup>-c), k,c {'>'} 0</td>
                      <td className="p-2">O(n<sup>k</sup>log(n))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="mb-4">
                Consider a version of Gambler's Fallacy, where the opponent thinks we'll play an action x with probability 
                proportional to 1 - freq(x). That is:
              </p>
              <div className="pl-8 mb-4">
                f(x, S<sub>t</sub>) = (1 - freq(x))/(Σ<sub>a∈A</sub>(1 - freq(a))) = (1 - freq(x))/(n - 1)
              </div>
              <p>
                This yields b(n) = (n-1)/(n-2), which is approaching 1 as n increases. The required differences to learn 
                the best response to any given action are O(n log(n)).
              </p>
            </div>
          </div>
        </div>
      )
    },
    responding: { 
      title: "4 OPPONENT BEST RESPONDS", 
      content: (
        <div className={`${inconsolata.className} space-y-6 text-gray-900`}>
          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>4.1 Learning the Payoff Matrix</h3>
            <p className="mb-4">
              Unlike the randomizing opponent setting where we learn best responses through frequency analysis, here we attempt 
              to learn the game matrix M directly. Our key insight is that if we can find boundary points where two actions are 
              equally optimal for the opponent, we can construct a linear system that recovers M up to error δ<sub>final</sub>.
            </p>
            <p className="mb-4">We leverage that the opponent:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Forms belief f(·, S<sub>t</sub>) about our next action based on our history S<sub>t</sub></li>
              <li>Plays a best response to maximize expected utility against this belief</li>
            </ul>
            <p className="mt-4">
              By carefully controlling our action frequencies, we can steer the opponent's beliefs to boundary points where 
              two actions become equally optimal responses. These boundary points provide linear constraints on M that allow 
              us to reconstruct it. Once we have an accurate estimate of M, we can win the game on every round with low error.
            </p>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>4.2 Boundary Points</h3>
            
            <div className="mb-6">
              <p className="font-bold mb-2">Definition (Boundary Point):</p>
              <p>
                For actions i,j ∈ A, a boundary point p<sup>ij</sup> is a probability distribution where:
              </p>
              <div className="my-4 pl-8 italic">
                (Mp<sup>ij</sup>)<sub>i</sub> = (Mp<sup>ij</sup>)<sub>j</sub> ≥ (Mp<sup>ij</sup>)<sub>k</sub> for all k
              </div>
              <p>That is, actions i and j are both optimal best responses to p<sup>ij</sup>.</p>
            </div>

            <div className="mb-6">
              <p className="font-bold mb-2">Finding Boundary Points:</p>
              <p className="mb-2">
                To find boundary points, we must steer the opponent's empirical distribution through our choice of actions. 
                We can do this by playing actions proportionally to the target distribution. That is, to find each p<sup>ij</sup> 
                where (Mp<sup>ij</sup>)<sub>i</sub> = (Mp<sup>ij</sup>)<sub>j</sub>, we:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Use binary search to identify target distributions</li>
                <li>For each target, play actions proportionally to steer the opponent's empirical distribution</li>
                <li>Observe which action becomes dominant</li>
              </ol>
            </div>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>4.3 Analysis</h3>
            
            <p className="mb-4">Let's distinguish between different error parameters:</p>
            <ul className="list-disc pl-8 space-y-2 mb-6">
              <li>δ<sub>steer</sub>: accuracy of steering (how close f(·, S<sub>T</sub>) is to p<sub>target</sub>)</li>
              <li>δ<sub>binary</sub>: precision of binary search</li>
              <li>δ<sub>final</sub>: final error between estimated and true p<sup>ij</sup></li>
            </ul>

            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Steering Accuracy Per Iteration:</p>
                <p>
                  Let t be the current round before steering begins. The SteerOpponentDistribution algorithm first requires 
                  (n-1)t rounds to reset to uniform distribution, then plays for an additional N = O(1/δ<sub>steer</sub><sup>2</sup> · log(n/δ<sub>steer</sub>)) 
                  rounds to achieve ||f(·, S<sub>t+N+(n-1)t</sub>) - p<sub>target</sub>|| ≤ δ<sub>steer</sub> with probability at least 1-δ<sub>steer</sub>.
                </p>
              </div>
              
              <div>
                <p className="font-bold mb-2">Binary Search with Steering Error:</p>
                <p>
                  If SteerOpponentDistribution achieves steering error δ<sub>steer</sub>, then after O(log(1/δ<sub>binary</sub>)) iterations, 
                  SteeringBinarySearch finds a point p̂<sup>ij</sup> such that:
                </p>
                <div className="my-4 pl-8 italic">
                  ||p̂<sup>ij</sup> - p<sup>ij</sup>|| ≤ O(δ<sub>binary</sub> + δ<sub>steer</sub>)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>4.4 Matrix Recovery</h3>
            
            <p className="mb-4">To recover M, we:</p>
            <ol className="list-decimal list-inside space-y-2 pl-4 mb-6">
              <li>Find approximate boundary points p̂<sup>ij</sup> for all i &lt; j</li>
              <li>Each p̂<sup>ij</sup> gives us an equation (Mp̂<sup>ij</sup>)<sub>i</sub> = (Mp̂<sup>ij</sup>)<sub>j</sub></li>
              <li>These equations form a linear system Ax = 0</li>
              <li>Solving this system recovers the entries of M</li>
            </ol>

            <div>
              <p className="font-bold mb-2">Matrix Recovery with Steering:</p>
              <p>
                Given estimates p̂<sup>ij</sup> for all pairs (i,j) with i &lt; j, where each ||p̂<sup>ij</sup> - p<sup>ij</sup>|| ≤ O(δ<sub>binary</sub> + δ<sub>steer</sub>), 
                we can recover an estimate M̂ of the game matrix M such that:
              </p>
              <div className="my-4 pl-8 italic">
                ||M̂ - M|| ≤ O(κ(δ<sub>binary</sub> + δ<sub>steer</sub>))
              </div>
              <p>where κ is the condition number of the resulting linear system.</p>
            </div>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>4.5 Improved Complexity with Recency Bias</h3>
            
            <div className="mb-6">
              <p className="mb-4">
                We can significantly improve our complexity bounds by considering an opponent who exhibits recency bias - 
                only considering the last W actions when forming their beliefs.
              </p>
              
              <div className="mb-6">
                <p className="font-bold mb-2">Definition (Recency-Biased Opponent):</p>
                <p>
                  At time t, the opponent's belief f(x, S<sub>t</sub>) is proportional to the frequency of action x in the 
                  last W actions of S<sub>t</sub>, where W is a fixed constant:
                </p>
                <div className="my-4 pl-8 italic">
                  f(x, S<sub>t</sub>) = count(x in last W actions of S<sub>t</sub>)/W
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Improved Complete Learning Algorithm:</p>
              <p>
                With a recency-biased opponent using window size W = Θ(κ/δ<sub>final</sub>), there exists an algorithm that 
                learns a zero-sum symmetric game matrix M up to error δ<sub>final</sub> using:
              </p>
              <div className="my-4 pl-8 italic">
                O(n<sup>3</sup> · log(κ/δ<sub>final</sub>) · (κ/δ<sub>final</sub> + κ<sup>2</sup>/δ<sub>final</sub><sup>2</sup> · log(nκ/δ<sub>final</sub>)))
              </div>
              <p>
                total plays, which is polynomial in all parameters. This improved bound shows that learning is tractable when 
                facing a more realistic opponent who exhibits recency bias. The polynomial complexity makes this approach 
                practical for moderately-sized games, especially when the window size W is reasonable.
              </p>
            </div>
          </div>
        </div>
      )
    },
    discussion: { 
      title: "5 DISCUSSION", 
      content: (
        <div className={`${inconsolata.className} space-y-6 text-gray-900`}>
          <p className="text-lg">
            Our work presents two frameworks for learning against probabilistic opponents in repeated zero-sum games: one for 
            opponents who play according to predicted likelihoods, and another for opponents who maximize expected utility. 
            While these frameworks provide theoretical foundations for understanding probabilistic opponent behavior, several 
            important directions remain for future work.
          </p>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>5.1 Extensions to Non-Stationary Behavior</h3>
            
            <p className="mb-4">
              A natural extension would be to consider opponents exhibiting non-stationary behavior. Factors such as learning, 
              adaptation, and context-specific considerations lead to dynamic decision-making processes. For instance, in 
              iterated games like the Prisoner's Dilemma, players may start with a particular strategy but adjust their 
              choices based on prior outcomes and the perceived behavior of others. This adaptability reflects the absence 
              of rigid strategic patterns.
            </p>

            <p className="mb-4">This motivates several interesting directions:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Opponents who play different biased strategies according to a time-varying distribution</li>
              <li>Decay models where opponents become increasingly resistant to manipulation over time</li>
              <li>Mixed models combining multiple types of behavioral biases with varying degrees of influence</li>
              <li>Extending the frameworks to handle partial observability or noisy feedback</li>
            </ul>

            <p className="mt-4">
              These extensions would better reflect real-world scenarios where opponents adapt and learn from interactions, 
              making them progressively harder to exploit.
            </p>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>5.2 Limitations and Potential Improvements</h3>
            
            <p className="mb-4">Our current frameworks have several limitations that suggest areas for improvement:</p>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                In our first framework, we could generalize the bias measure to use arbitrary probability vectors 
                p = [p<sub>1</sub>, ..., p<sub>n</sub>], with the ratio between the highest probability p* and second-highest 
                probability serving as the degree of bias. This would provide a more flexible framework for modeling different 
                types of behavior, and would allow us to steer the opponent's behavior more effectively.
              </li>
              <li>
                For our second framework involving utility-maximizing opponents, we found that certain behavioral biases 
                (like gambler's fallacy) were difficult to incorporate through the f(x, S<sub>t</sub>) function. This was 
                primarily because such biases are not easily "steerable" in the way our algorithm requires. Developing 
                alternative approaches that can accommodate a broader range of behavioral biases remains an open challenge.
              </li>
            </ol>
          </div>

          <div className="bg-white/30 rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <h3 className={`${inriaSerif.className} text-xl font-bold mb-4`}>5.3 Minimum Actions to Steer Frequency-Based Biases</h3>
            
            <p className="mb-4">
              When looking at opponents whose bias was dependent on the frequency of our actions, we found that finding the 
              minimum number of actions needed to reach a target distribution could be formulated as an integer programming 
              problem. For instance, suppose we are starting with an empty action history and want to reach some distribution 
              p<sup>target</sup>.
            </p>

            <p className="mb-4">
              Consider f(S<sub>t</sub>) such that f(x, S<sub>t</sub>) ∝ n<sub>x</sub>(S<sub>t</sub>), where n<sub>x</sub>(S<sub>t</sub>) is 
              the number of times action x was played in the history S<sub>t</sub>. Suppose we want each value in the distribution 
              to be within some δ of p<sup>target</sup>. Setting each n<sub>x</sub> to be a (integer) decision variable, we obtain 
              the following integer (linear) program:
            </p>

            <div className="pl-8 space-y-2 italic">
              <p>min Σ<sub>k=1</sub><sup>n</sup> n<sub>k</sub></p>
              <p>s.t. n<sub>x</sub> - (p<sup>target</sup><sub>x</sub> + δ)(Σ<sub>k=1</sub><sup>n</sup> n<sub>k</sub>) ≤ 0, ∀x</p>
              <p>(p<sup>target</sup><sub>x</sub> - δ)(Σ<sub>k=1</sub><sup>n</sup> n<sub>k</sub>) - n<sub>x</sub> ≤ 0, ∀x</p>
            </div>

            <p className="mt-4">
              Techniques like branch and bound can be used to solve this problem, but the worst-case runtime would be 
              exponential in the number of actions. This indicates that optimal steering of the bias function, especially 
              when it is dependent on the entire action history is a particularly difficult problem.
            </p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="flex h-[70vh] text-gray-900">
      {/* Navigation Sidebar */}
      <div className="w-64 border-2 border-black rounded-l-3xl bg-white/20 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 border-2 
                ${activeSection === section.id 
                  ? 'bg-black text-white border-black shadow-none translate-x-[2px] translate-y-[2px]' 
                  : 'bg-[#CCF1F5] border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
            >
              <span className={`${inriaSerif.className} text-lg`}>{section.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8 border-2 border-l-0 border-black rounded-r-3xl bg-white/20">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${inriaSerif.className} text-3xl font-bold mb-8 text-gray-900`}>
            {content[activeSection].title}
          </h2>
          <div className={`${inconsolata.className} text-gray-900`}>
            {content[activeSection].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayTheManContent;