const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
 
 function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .105)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which demand elements are considered in an MRP run?',
    answers: [
      { text: 'Customer orders (SALES ORDER)', correct: true },
      { text: 'Hyper Text Multiple Language', correct: false }
    ]
  },
  {
    question: 'Which object is created to create reports on market characteristics such as customer, product and region?',
    answers: [
      { text: 'Result object', correct: true },
      { text: 'computer Style Sheet', correct: false },
      { text: 'Colorful Style sheet', correct: false },
      { text: 'Cascading Show Sheet', correct: false }
    ]
  },
  {
    question: 'What action assigns actual costs to a project?',
    answers: [
      { text: 'Increase th value of the variable by 10', correct: false },
      { text: 'By removing goods from the warehouse', correct: true },
      { text: 'Increase the value of the variable by 5', correct: false },
      { text: 'Create a new variable', correct: false }
    ]
  },
  {
    question: 'Which business partner role connects the supplier to your balance sheet Company code?',
    answers: [
      { text: 'Variablename[1]', correct: false },
      { text: 'Variablename(0)', correct: false },
      { text: 'Variablename[first]', correct: false},
      { text: 'FI Vendor (FI KREDITOR)', correct: true}
    ]
  },
  {
    question: 'You purchase raw materials with an order for a cost center. At which process step are financial accounting documents posted?',
    answers: [
      { text: 'const posting', correct: false },
      { text: 'letting it be', correct: false },
      { text: 'var', correct: false},
      { text: 'When posting a valued goods receipt', correct: true}
    ]
  },
  {
    question: "What information for a general ledger account do you maintain at company code level?",
    answers: [
      { text: "Account currency", correct: true },
      { text: "Expert measure", correct: false },
      { text: "Pro cons", correct: false },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What technological elements ensure a comprehensive optimization of the user experience when working with X and O data?",
    answers: [
      { text: "agility level", correct: false },
      { text: "Absolute control", correct: false },
      { text: "none", correct: false },
      { text: "1. Predictions using machine learning  2. Conversational KI", correct: true }
    ]
  },
  {
    question: "What is the result of posting a supplier invoice?",
    answers: [
      { text: "The order history is updated.", correct: true },
      { text: "Order deleted", correct: false },
      { text: "Order cancelled", correct: false },
      { text: "Re-order took place", correct: false }
    ]
  },
  {
    question: "Which controlling objects can be covered by a settlement rule in SAP S/4HANA be billed?",
    answers: [
      { text: "get().random", correct: false },
      { text: "1. Maintenance order  2. PSP element  3. Production order", correct: true },
      { text: "random.floor()* Math.ceil", correct: false },
      { text: "Math.carpet(Math.rug()", correct: false }
    ]
  },
  {
    question: "Which human capital management organizational element is in the corporate structure assigned directly to a company code?",
    answers: [
      { text: "Area G", correct: false },
      { text: "Personnel area X", correct: true },
      { text: "Personal area F", correct: false },
      { text: "Area D", correct: false }
    ]
  },
  {
    question: "What data must be linked to a cost center to derive segment reporting?",
    answers: [
      { text: "New York", correct: false },
      { text: "London", correct: false },
      { text: "Profit center", correct: true },
      { text: "Dublin", correct: false }
    ]
  },
  {
    question: "What procedures can be used for cross-plant relocation become?",
    answers: [
      { text: "Jeff Bezos", correct: false },
      { text: "1. Stock transfer order without delivery 2. Two-step process  3. One-step process", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Tony Stark", correct: false }
    ]
  },
  {
    question: "When will backlog processing be considered?",
    answers: [
      { text: "If the order quantity is not fully confirmed", correct: true },
      { text: "Intel", correct: false },
      { text: "Amazon", correct: false },
      { text: "Microsoft", correct: false }
    ]
  },
  {
    question: "Which document causes a commitment to be created for an internal order when it is saved?",
    answers: [
      { text: "Super", correct: false },
      { text: "Sales", correct: false },
      { text: "Nothing", correct: false },
      { text: "Order", correct: true }
    ]
  },
  {
    question: "What activities can an employee carry out via Employee Self-Service?",
    answers: [
      { text: "January 20th, 2007", correct: false },
      { text: "January 20th, 2008", correct: false },
      { text: "1. Book a training course  2. Enter entries in the time sheet  3. Apply for employer benefits", correct: true },
      { text: "January 20th, 2010", correct: false }
    ]
  },
  {
    question: "Name some of the features of SAP Fiori user interface design?",
    answers: [
      { text: "none", correct: false },
      { text: "none-customizable", correct: false },
      { text: "Non-editable", correct: false },
      { text: "1. Customizable  2. Role based", correct: true }
    ]
  },
  {
    question: "What is mandatory when creating a business partner if you use the want to set up business partners at different organizational levels?",
    answers: [
      { text: "No idea", correct: false },
      { text: "Billing", correct: false },
      { text: "Business partner role", correct: true },
      { text: "Money", correct: false }
    ]
  },
  {
    question: "What is the name of the role-based, personalized UI client that the user can use in parallel established Uls can access SAP Fiori apps?",
    answers: [
      { text: "SAP Fiori Launchpad", correct: true },
      { text: "Christoph", correct: false },
      { text: "New land", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What happens, if you change the status of a maintenance order to -technically completed- change?",
    answers: [
      { text: "Volleyball", correct: false },
      { text: "Basketball", correct: false },
      { text: "Handball", correct: false },
      { text: "1. The invoices can be processed  2. Open purchase requisitions are deleted", correct: true }
    ]
  },
  {
    question: "Which of the following represents an overarching unity of all organizational elements in SAP S/4HANA?",
    answers: [
      { text: "Sales", correct: false },
      { text: "Order", correct: false },
      { text: "Client", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What types of SAP Fiori applications directly use SAP HANA functions?",
    answers: [
      { text: "Transactional", correct: false },
      { text: "S/4 Hana", correct: false },
      { text: "ERP", correct: false },
      { text: "1. Analytical 2. Fact Sheet", correct: true }
    ]
  },
  {
    question: "Which objects can be assigned to a purchasing organization?",
    answers: [
      { text: "Cairo Plant", correct: false },
      { text: "Milan Plant and Envron", correct: false },
      { text: "Osaka only", correct: false },
      { text: "1. Plant 2. Supplier 3. Material master", correct: true }
    ]
  },
  {
    question: "Which master data records are used in extended planning? ",
    answers: [
      { text: "Eldorado", correct: false },
      { text: "1. Product  2. Location", correct: true },
      { text: "Jabello", correct: false },
      { text: "Sicily", correct: false }
    ]
  },
  {
    question: "You want the SAP S/4HANA system to perform product cost planning. Which master data is used to calculate the quantity structure? ",
    answers: [
      { text: "English", correct: false },
      { text: "1. Parts list  2. Work plan", correct: true },
      { text: "French", correct: false },
      { text: "Bracelleto", correct: false }
    ]
  },
  {
    question: "Which MRP control parameter defines the scope of a planning run, if that the system only takes into account changes that are within the planning horizon and only schedules materials to which MRP-relevant changes have been made?",
    answers: [
      { text: "Mount Amazona", correct: false },
      { text: "Kilimanjaro", correct: false },
      { text: "Processing key NETCH", correct: true },
      { text: "Idanre hill", correct: false }
    ]
  },
  {
    question: "Which organizational elements are assigned a warehouse number in the SAP corporate structure assigned?",
    answers: [
      { text: "1. plant  2. Storage location", correct: true },
      { text: "Client", correct: false },
      { text: "1. Client 2. Warehouse", correct: false },
      { text: "1. plant 2. Client", correct: false }
    ]
  },
  {
    question: "What happens when you post a goods issue in a delivery document in sales?",
    answers: [
      { text: "1. The billing due list is updated  2. The inventory quantity is updated  3. A material ledger document is created", correct: false },
      { text: "The billing due list is updated", correct: false },
      { text: "The inventory quantity is updated", correct: true },
      { text: "A material ledger document is created", correct: false }
    ]
  },
  {
    question: "You create a new company code that you assign to the group controlling area want to assign which characteristics the new company code must have with the others company codes that are already assigned to the controlling area have in common?",
    answers: [
      { text: "Sales order", correct: false },
      { text: "1. Fiscal year variant  2. Operational chart of accounts", correct: true },
      { text: "Fiscal year variant", correct: false },
      { text: "Operational chart of accounts", correct: false }
    ]
  },
  {
    question: "Which data properties does the condition type control when creating condition master records?",
    answers: [
      { text: "Jaw bone", correct: false },
      { text: "Validity period", correct: false },
      { text: "1. Validity period  2. Squadrons", correct: true },
      { text: "Squadrons", correct: false }
    ]
  },
  {
    question: "What does a workplace control?",
    answers: [
      { text: "1. Calculation of the costs for services provided   2. Capacity availability", correct: true },
      { text: "Calculation error", correct: false },
      { text: "human and robot error", correct: false },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What can be maintained in a maintenance notification?",
    answers: [
      { text: "1. Measures  2. Cause of damage", correct: false },
      { text: "1. Equipment  2. Measures", correct: false },
      { text: "1. Equipment  2. Measures  3. Cause of damage", correct: true },
      { text: "Cause of damage only", correct: false }
    ]
  },
  {
    question: "You post an invoice for the purchase of a company car. Which accounts are included in the booking voucher posted?",
    answers: [
      { text: "Iphone x", correct: false },
      { text: "1. Accounts payable account (Creditor Account)  2. Tax account", correct: false },
      { text: "1. Asset account  2. Accounts payable account (Creditor Account)  3. Tax account", correct: true },
      { text: "Asset account", correct: false }
    ]
  },
  {
    question: "A goods issue is posted for a production order. What's the score? ",
    answers: [
      { text: "1996 version of sap", correct: false },
      { text: "Erp prep", correct: false },
      { text: "1. The actual costs are updated in the production order.  2. Material reservation is reduced.  3. A material ledger document is created.", correct: true },
      { text: "Actual costs", correct: false }
    ]
  },
  {
    question: "What is a typical sequence of process steps within the scope of planned maintenance",
    answers: [
      { text: "General Order", correct: false },
      { text: "Through Android Store", correct: false },
      { text: "Through Apple Sales", correct: false },
      { text: "Create message - ???Create order - Release order - Execute order - Complete the order", correct: true }
    ]
  },
  {
    question: "What is created when you make a valuated goods receipt for consumables book?",
    answers: [
      { text: "Cost accounting document", correct: true },
      { text: "None", correct: false },
      { text: "No Idea", correct: false },
      { text: "Personal Sales", correct: false }
    ]
  },
  {
    question: "What can you record in the overall confirmation of a maintenance order?",
    answers: [
      { text: "PARSE readings", correct: false },
      { text: "Iranes", correct: false },
      { text: "Meter readings", correct: true },
      { text: "pokustr", correct: false }
    ]
  },
  {
    question: "For what reasons might you want to create an equipment master record?",
    answers: [
      { text: "Thailand", correct: false },
      { text: "1. To carry out maintenance measures for certain parts of your technical system carry out and record long-term evaluation.  2. To collect technical data about an object over a long period of time and to evaluate.", correct: true },
      { text: "Zimbabwe", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "What does a booking key control?",
    answers: [
      { text: "Clit oris", correct: false },
      { text: "kaowe", correct: false },
      { text: "Everest", correct: false },
      { text: "1. Account type  2. Debit/credit posting", correct: true }
    ]
  },
  {
    question: "Which objects can be assigned to a profit center? ",
    answers: [
      { text: "None of the above", correct: false },
      { text: "batval", correct: false },
      { text: "Buenos", correct: false },
      { text: "1. b. material  2. Sales order item", correct: true }
    ]
  },
  {
    question: "What are the advantages of using a business partner in SAP S/4HANA?",
    answers: [
      { text: "False-It's Aquito", correct: false },
      { text: "True", correct: false },
      { text: "Definitely yes", correct: false },
      { text: "1. It reduces the amount of redundant data.  2. It offers a uniform architecture.", correct: true }
    ]
  },
  {
    question: "Which element of a maintenance order contains the field values for -Workplace-, “Tax code” and “wage information”?",
    answers: [
      { text: "Occurrence / Process", correct: true },
      { text: "Not necessary", correct: false },
      { text: "False", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which planning tool prioritizes customer order forecasting and planning strategically use inventory buffers? ",
    answers: [
      { text: "False", correct: false },
      { text: "Not really correct", correct: false },
      { text: "Demand-driven material requirements planning (DDMRP)", correct: true },
      { text: "Not really true", correct: false }
    ]
  },
  {
    question: "At which step is the imputed profit and market segment calculation carried out updated? ",
    answers: [
      { text: "USA document", correct: false },
      { text: "Ghana Area", correct: false },
      { text: "Save billing document. X", correct: true },
      { text: "China Production", correct: false }
    ]
  },
  {
    question: "What is the correct term for a group of dependencies, operations and relationships in chronological order in a project? ",
    answers: [
      { text: "Animals", correct: false },
      { text: "Politics", correct: false },
      { text: "Network plan", correct: true },
      { text: "Mountains", correct: false }
    ]
  },
  {
    question: "You have created an asset master record. What other master data record can be created synchronously? ",
    answers: [
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
      { text: "Elephant", correct: false },
      { text: "Equipment", correct: true }
    ]
  },
  {
    question: "What type of document is created for an external processing operation?",
    answers: [
      { text: "Sales", correct: false },
      { text: "Book", correct: false },
      { text: "Order", correct: true },
      { text: "Client", correct: false }
    ]
  },
  {
    question: "Which master data in the service type is used to post a service allocation used?",
    answers: [
      { text: "Hulk Hogan", correct: false },
      { text: "Warrior SAP", correct: false },
      { text: "Secondary cost type", correct: true },
      { text: "Stone cold", correct: false }
    ]
  },
  {
    question: "Which master data is directly assigned to a company code",
    answers: [
      { text: "Christians", correct: false },
      { text: "1. Attachment  2. Cost centers", correct: true },
      { text: "Atheists", correct: false },
      { text: "Monks", correct: false }
    ]
  },
  {
    question: "Which residue processing strategy has the highest processing priority and will used to release confirmed inventory to help plan other orders to prioritize future inventory requirements?",
    answers: [
      { text: "Jews", correct: false },
      { text: "Abramohic religion", correct: false },
      { text: "Lose / Lost", correct: true },
      { text: "Only catholics", correct: false }
    ]
  },
  {
    question: "What is the correct sequence of individual steps in the sales process?",
    answers: [
      { text: "Australia", correct: false },
      { text: "South Africa", correct: false },
      { text: "Create sales order - Check availability - Edit delivery document - Post goods issue", correct: true },
      { text: "Iceland", correct: false }
    ]
  },
  {
    question: "Which of the following are business partner types in SAP S/4HANA?",
    answers: [
      { text: "1. Client 2. Group", correct: false },
      { text: "Organisation", correct: false },
      { text: "1. organization 2. person 3. group", correct: true },
      { text: "Pacific river", correct: false }
    ]
  },
  {
    question: "Which of the following are selection modes for MRP execution?",
    answers: [
      { text: "Mpg SAP", correct: false },
      { text: "No Idea", correct: false },
      { text: "Joining forces", correct: false },
      { text: " 1. pMRP 2. MRP Live 3. Classic MRP", correct: true }
    ]
  },
  {
    question: "Which SAP business area solution can be used to expand the scope of SAP S/4HANA sourcing and procurement can be used?",
    answers: [
      { text: "SAP fiori", correct: false },
      { text: "SAP ssp", correct: false },
      { text: "SAP Goose", correct: false },
      { text: "SAP Ariba", correct: true }
    ]
  },
  {
    question: "What is the advantage of using stock transport orders instead of rearrangements?",
    answers: [
      { text: "none", correct: false },
      { text: "No process of the OUT-OF-TIME", correct: false },
      { text: "The process of issuing and receiving goods is carried out using the order history monitored.", correct: true },
      { text: "SAPostistic process", correct: false }
    ]
  },
  {
    question: "Which controlling object is a statistical object?",
    answers: [
      { text: "Profit center", correct: true },
      { text: "Sales center", correct: false },
      { text: "Bill center", correct: false },
      { text: "Order center", correct: false }
    ]
  },
  {
    question: "Which function allocates funds to the budget of a PSP-element?",
    answers: [
      { text: "Malaria control", correct: false },
      { text: "Corona-virus control", correct: false },
      { text: "Availability control", correct: true },
      { text: "Fever control", correct: false }
    ]
  },
  {
    question: "Which of the following is an acceptable hierarchical structure for the internal accounting within the SAP S/4HANA corporate structure?",
    answers: [
      { text: "is assigned to a operating concern controlling the area .", correct: false },
      { text: "A controlling area is assigned to a operating concern.", correct: true },
      { text: "is assigned to none", correct: false },
      { text: "is assigned to a operating concern level 356", correct: false }
    ]
  },
  {
    question: "What tasks are carried out for external reporting?",
    answers: [
      { text: "Programming level 2", correct: false },
      { text: "20 level SAP", correct: false },
      { text: "23 level SAP", correct: false },
      { text: "1. Manage customer accounts  2. Create a profit and loss statement", correct: true }
    ]
  },
  {
    question: "For which document item do you have to specify a movement type if you have one post an accounting document? => Asset account",
    answers: [
      { text: "Germany account", correct: false },
      { text: "PPE account", correct: false },
      { text: "Asset account", correct: true },
      { text: "SSF account", correct: false }
    ]
  },
  {
    question: "For which network planning process can you plan capacities?",
    answers: [
      { text: "Personal contribution", correct: true },
      { text: "Personal distribution", correct: false },
      { text: "Personal organisation", correct: false },
      { text: "Personal celebration", correct: false }
    ]
  },
  {
    question: "In a warehouse, what indicates the physical location where the goods are stored?",
    answers: [
      { text: "Storage facility", correct: false },
      { text: "Storage point", correct: false },
      { text: "Storage location", correct: true },
      { text: "Storage inhouse", correct: false }
    ]
  },
  {
    question: "Which organizational units do you create for financial accounting (FI) in SAP S/4HANA finance?",
    answers: [
      { text: "accounting area only", correct: false },
      { text: "segment only", correct: false },
      { text: "1. accounting area 2. segment", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "Which of the following statements applies to the distribution company structure",
    answers: [
      { text: "1. A sales channel can be assigned to several sales organizations.  2. A sales organization can only be assigned to one company code.   3. A division can be assigned to several sales organizations.", correct: true },
      { text: "He jumped", correct: false },
      { text: "He was a very tall person", correct: false },
      { text: "Not possible", correct: false }
    ]
  },
  {
    question: "What are some of the features of SAP Extended Warehouse Management?",
    answers: [
      { text: "Determination of the storage bin level for incoming goods", correct: false },
      { text: "Mobile device integration", correct: false },
      { text: "1. Mobile device integration  2. Determination of the storage bin level for incoming goods", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What is the result of implementing a planned order.",
    answers: [
      { text: "RODE NEW SAP", correct: false },
      { text: "NEO RODE SAP", correct: false },
      { text: "NEE DREW SAP", correct: false },
      { text: "1. A purchase requisition  2. A production order", correct: true }
    ]
  },
  {
    question: "Which end-to-end business processes are used by SAP S/4HANA in connection with the intelligent enterprise covered?",
    answers: [
      { text: "Source to control", correct: false },
      { text: "Record to Report", correct: false },
      { text: "Source to control => Request to Service => Record to Report", correct: true },
      { text: "Request to Service", correct: false }
    ]
  },
  {
    question: "For which property are you planning tariffs?",
    answers: [
      { text: "Cost centre", correct: true },
      { text: "Late Center", correct: false },
      { text: "Wait center", correct: false },
      { text: "Fit center", correct: false }
    ]
  },
  {
    question: "What is the purpose of a work breakdown structure (PSP)?",
    answers: [
      { text: "Allocation of budgets", correct: false },
      { text: "1. Allocation of budgets 2. Definition of responsibilities  3. Evaluation of aggregated data", correct: true },
      { text: "Definition of responsibilities", correct: false },
      { text: "Evaluation of aggregated data", correct: false }
    ]
  },
  {
    question: "What is document splitting used for?",
    answers: [
      { text: "Breakfast in the office", correct: false },
      { text: "Breaking code of conduct", correct: false },
      { text: "To create balance reports by segments.", correct: true },
      { text: "Balance sheet", correct: false }
    ]
  },
  {
    question: "Which of the following order of steps in the procurement process is correct?",
    answers: [
      { text: "Check - order - payment - send - booking ", correct: false },
      { text: "none", correct: false },
      { text: "Determination of requirements - selection of suppliers - order processing - receipt of goods - Audit", correct: true },
      { text: "ID check", correct: false }
    ]
  },
  {
    question: "As part of customer-made production, a raw material must be transported from the warehouse to production be issued. To which order do you post the costs for the goods issue?",
    answers: [
      { text: "a. Customer order", correct: true },
      { text: "a Weather for two", correct: false },
      { text: "Sunrise paycheck", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "What do you have to do when placing an order if you want a material directly for a cost center want to buy? ",
    answers: [
      { text: "Enter a sale order item category", correct: false },
      { text: "Enter a purchase order item category", correct: true },
      { text: "Enter a quit order item category", correct: false },
      { text: "Enter a cancel order item category", correct: false }
    ]
  },
  {
    question: "To which work areas can data from time sheets (CATS) be transferred directly become?",
    answers: [
      { text: "1. Materials Management (MM)  2. Human Capital Management (HCM)  3. Customer Service (CS)", correct: true },
      { text: "Price protection (pp)", correct: false },
      { text: "Customer protection (cp)", correct: false },
      { text: "1. Materials Management (MM)  2. Price Control (PC)", correct: false }
    ]
  },
  {
    question: "Which object can you invoice an internal order for",
    answers: [
      { text: "feedback", correct: false },
      { text: "Attachment", correct: true },
      { text: "complaint", correct: false },
      { text: "Human", correct: false }
    ]
  },
  {
    question: "In which steps of customer order processing are postings made in the general ledger generated?",
    answers: [
      { text: "Secure invoice", correct: false },
      { text: "Post goods issue", correct: false },
      { text: "1. Secure invoice  2. Post goods issue", correct: true },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "What processes can be carried out automatically when you provide feedback for book a production order?",
    answers: [
      { text: "Goods Receipt", correct: false },
      { text: "Posting the actual costs", correct: false },
      { text: "1. Goods Receipt  2. Goods issue  3. Posting the actual costs", correct: true },
      { text: "Goods issue", correct: false }
    ]
  },
  {
    question: "Which intelligent technologies were enabled by the new line of code from SAP S/4HANAnactivated?",
    answers: [
      { text: "Ball", correct: false },
      { text: "1. Artificial Intelligence (AI)  2. Internet of Things (loT)  3. Machine Learning (ML)", correct: true },
      { text: "Books", correct: false },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "Which business process activities create a financial accounting document?",
    answers: [
      { text: "Transfer inventory to another company code", correct: false },
      { text: "1. Execute depreciation run  2. Post goods issue for the production order.  3. Transfer inventory to another company code", correct: true },
      { text: "Execute depreciation run", correct: false },
      { text: "Post goods issue for the production order.", correct: false }
    ]
  },
  {
    question: "How can you post external personnel costs to a network planning activity?",
    answers: [
      { text: "Service entry sheet", correct: false },
      { text: "Fear of failure", correct: false },
      { text: "About service entry sheet", correct: true },
      { text: "Fear of mountain", correct: false }
    ]
  },
  {
    question: "In which of the following ways of creating an employee master record is a sequence of infotypes used?",
    answers: [
      { text: "Personnel measures", correct: true },
      { text: "Meters measures", correct: false },
      { text: "150 measures", correct: false },
      { text: "200 Personnel measures", correct: false }
    ]
  }
]