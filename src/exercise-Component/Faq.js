import React from 'react'
import './FaqStyle.css';
import Questions from './Questions';


export default function Faq() {
    const allFaqs = [
        {
            id: "001",
            question: "What is your name?",
            answer: "My name is Abdul Rahman"
        },
        {
            id: "002",
            question: "What is your Company Name?",
            answer: "My Company name is AB. Tech Limited."
        },
        {
            id: "003",
            question: "How many Years of experience do you have?",
            answer: "I am having more than 5 Years of Experience in this field of Tech."
        },
    ]

    const faqHandle = () => {
        return allFaqs.map(faq => {
            return <Questions question= {faq.question} answer={faq.answer}/>
        })
    }
    return (
        <div className="faqarea">
            <h5>FREQUENTLY ASKED QUESTION</h5>
            
            {faqHandle()}
            {/* <Questions question= {allFaqs[1].question} answer={allFaqs[1].answer} /> */}
        </div>
    )
}
