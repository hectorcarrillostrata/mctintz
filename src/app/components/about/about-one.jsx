import React from 'react'
import {FiHelpCircle} from 'react-icons/fi'

export default function AboutOne() {
  return (
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="d-flex">
                    <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"></FiHelpCircle>
                    <div className="flex-1">
                        <h5 className="mt-0">How our <span className="text-primary">Landrick</span> work ?</h5>
                        <p className="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex">
                    <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"></FiHelpCircle>
                    <div className="flex-1">
                        <h5 className="mt-0"> What is the main process open account ?</h5>
                        <p className="answer text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
                    <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"></FiHelpCircle>
                    <div className="flex-1">
                        <h5 className="mt-0"> How to make unlimited data entry ?</h5>
                        <p className="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="d-flex">
                    <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"></FiHelpCircle>
                    <div className="flex-1">
                        <h5 className="mt-0"> Is <span className="text-primary">Landrick</span> safer to use with my account ?</h5>
                        <p className="answer text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
