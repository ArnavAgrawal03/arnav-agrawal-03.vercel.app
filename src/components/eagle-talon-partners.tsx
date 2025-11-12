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


const EagleTalonPartnersContent = () => {
    return (
        <div className="relative pt-3 pb-0">
            <div className={`${inconsolata.className} space-y-8 text-gray-900`}>
                <div>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed">
                        <i>A note on confidentiality:</i> Due to the proprietary nature of the quantitative research and trading strategies I worked on at Eagle Talon Partners, I cannot share specific details about the projects. Instead, I'll focus on my key learnings and reflections from this experience.
                    </p>
                </div>

                <div>
                    <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>The Data Cleaning Journey</h4>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed">
                        Early in the project, I learned a valuable lesson about the importance of data quality. After feeding raw, unprocessed interview transcripts into an XGBoost model, the results were essentially noise - the model was picking up on irrelevant patterns in formatting inconsistencies and transcription errors rather than meaningful content.
                    </p>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed">
                        This led me to develop an automated data cleaning pipeline that handled issues like:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-base sm:text-lg leading-relaxed">
                        <li>Standardizing text formatting and removing transcription artifacts</li>
                        <li>Resolving inconsistent company and person name references</li>
                        <li>Filtering out boilerplate language and irrelevant sections</li>
                        <li>Handling missing or corrupted data points</li>
                    </ul>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed">
                        The improvement in model performance after implementing this pipeline was dramatic, leading to much more reliable signal extraction.
                    </p>
                </div>

                <div>
                    <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>NLP Techniques Employed</h4>
                    <ul className="list-disc list-inside space-y-4 ml-4 text-base sm:text-lg leading-relaxed">
                        <li>
                            <strong>Named Entity Recognition (NER):</strong> Used to identify and track mentions of companies, people, products, and financial metrics throughout interviews
                        </li>
                        <li>
                            <strong>Topic Modeling:</strong> Implemented Latent Dirichlet Allocation (LDA) to identify key themes and shifts in management focus across multiple interviews
                        </li>
                        <li>
                            <strong>Sentiment Analysis:</strong> Applied VADER and fine-tuned BERT models to capture nuanced emotional content in executive communications
                        </li>
                        <li>
                            <strong>Dependency Parsing:</strong> Utilized to understand relationships between entities and actions in complex financial statements
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className={`${inriaSerif.className} text-xl font-bold mb-3`}>Impact and Learning</h4>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed">
                        This experience taught me that in quantitative finance, the quality of data preprocessing and feature engineering often matters more than model sophistication. Working with the firm's leadership team helped me understand how to translate technical NLP insights into actionable trading strategies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EagleTalonPartnersContent;
