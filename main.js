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
  shuffledQuestions = questions.sort(() => Math.random() - .80) /*105*/
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
      { text: 'Divisions', correct: false },
      { text: 'Planned orders', correct: false },
      { text: 'Purchase requisitions', correct: false }
    ]
  },
  {
    question: 'Which object is created to create reports on market characteristics such as customer, product and region?',
    answers: [
      { text: 'Result object', correct: true },
      { text: 'Profitcenter', correct: false },
      { text: 'Sales organization', correct: false },
      { text: 'Primary cost type', correct: false }
    ]
  },
  {
    question: 'What action assigns actual costs to a project?',
    answers: [
      { text: 'By processing a cost forecast', correct: false },
      { text: 'By removing goods from the warehouse', correct: true },
      { text: 'By saving a purchase order', correct: false },
      { text: 'By releasing a project budget', correct: false }
    ]
  },
  {
    question: 'Which business partner role connects the supplier to your balance sheet Company code?',
    answers: [
      { text: 'Supplier', correct: false },
      { text: 'FI debitor', correct: false },
      { text: 'Business partner "General', correct: false},
      { text: 'FI Vendor (FI KREDITOR)', correct: true}
    ]
  },
  {
    question: 'You purchase raw materials with an order for a cost center. At which process step are financial accounting documents posted?',
    answers: [
      { text: 'When approving an order.', correct: false },
      { text: 'When determining the payment method', correct: false },
      { text: 'When saving the order', correct: false},
      { text: 'When posting a valued goods receipt', correct: true}
    ]
  },
  {
    question: "What information for a general ledger account do you maintain at company code level?",
    answers: [
      { text: "Account currency", correct: true },
      { text: "Account designation", correct: false },
      { text: "Account type", correct: false },
      { text: "Account group", correct: false }
    ]
  },
  {
    question: "What technological elements ensure a comprehensive optimization of the user experience when working with X and O data?",
    answers: [
      { text: "Blockchain", correct: false },
      { text: "1. Absolute control 2. Conversational GI", correct: false },
      { text: "Design Thinking", correct: false },
      { text: "1. Predictions using machine learning  2. Conversational KI", correct: true }
    ]
  },
  {
    question: "What is the result of posting a supplier invoice?",
    answers: [
      { text: "The order history is updated.", correct: true },
      { text: "Open items are cleared on the vendor account", correct: false },
      { text: "The vendor payment is posted.", correct: false },
      { text: "The material ledger document is generated", correct: false }
    ]
  },
  {
    question: "Which controlling objects can be covered by a settlement rule in SAP S/4HANA be billed?",
    answers: [
      { text: "1. Profitcenter  2. PSP element  3. Production order", correct: false },
      { text: "1. Maintenance order  2. PSP element  3. Production order", correct: true },
      { text: "1. Customer order  2. PSP manual  3. Production order", correct: false },
      { text: "1. Maintenance order  2. PSP element  3. Production creation", correct: false }
    ]
  },
  {
    question: "Which human capital management organizational element is in the corporate structure assigned directly to a company code?",
    answers: [
      { text: "Position", correct: false },
      { text: "Personnel area X", correct: true },
      { text: "Employee grouping", correct: false },
      { text: "Organizational unit", correct: false }
    ]
  },
  {
    question: "What data must be linked to a cost center to derive segment reporting?",
    answers: [
      { text: "G/L account", correct: false },
      { text: "Cost center type", correct: false },
      { text: "Profit center", correct: true },
      { text: "Controlling area", correct: false }
    ]
  },
  {
    question: "What procedures can be used for cross-plant stock transfer?",
    answers: [
      { text: "1. Stock transport order without delivery", correct: false },
      { text: "1. Stock transfer order without delivery 2. Two-step process  3. One-step process", correct: true },
      { text: "Warehouse disposition and warehouse reorganization", correct: false },
      { text: "1. Stock transfer order without delivery 2. Two-step process  3. Three-step process", correct: false }
    ]
  },
  {
    question: "When will backlog processing be considered?",
    answers: [
      { text: "If the order quantity is not fully confirmed", correct: true },
      { text: "If no extended Available-to-Promise is available.", correct: false },
      { text: "If delivery dates can be met.", correct: false },
      { text: "When securing a customer order.", correct: false }
    ]
  },
  {
    question: "Which document causes a commitment to be created for an internal order when it is saved?",
    answers: [
      { text: "Maintenance order", correct: false },
      { text: "Customer order", correct: false },
      { text: "Production order", correct: false },
      { text: "Purchase Order", correct: true }
    ]
  },
  {
    question: "What activities can an employee carry out via Employee Self-Service?",
    answers: [
      { text: "1. Plan costs  2. making profit hugely 3. Apply for employer benefits", correct: false },
      { text: "1. Plan a budget  2. Enter entries in the time sheet  3. No to employer benefits", correct: false },
      { text: "1. Book a training course  2. Enter entries in the time sheet  3. Apply for employer benefits", correct: true },
      { text: "1. Training course as a priortity  2. Enter entries in the time sheet  3. Apply for employer benefits", correct: false }
    ]
  },
  {
    question: "Name some of the features of SAP Fiori user interface design?",
    answers: [
      { text: "Data-based", correct: false },
      { text: "1. Function-based 2. Role based", correct: false },
      { text: "1. Non-editable 2. Non Role based", correct: false },
      { text: "1. Customizable  2. Role based", correct: true }
    ]
  },
  {
    question: "What is mandatory when creating a business partner if you use the want to set up business partners at different organizational levels?",
    answers: [
      { text: "Account group", correct: false },
      { text: "Business partner function", correct: false },
      { text: "Business partner role", correct: true },
      { text: "Business partner type", correct: false }
    ]
  },
  {
    question: "What is the name of the role-based, personalized UI client that the user can use in parallel established Uls can access SAP Fiori apps?",
    answers: [
      { text: "SAP Fiori Launchpad", correct: true },
      { text: "SAP Business Client", correct: false },
      { text: "SAP Desian Study", correct: false },
      { text: "SAP Fiori Designer", correct: false }
    ]
  },
  {
    question: "What happens, if you change the status of a maintenance order to -technically completed- change?",
    answers: [
      { text: "1. The material list is updated in the maintenance notification  2. Open sales requisitions are deleted", correct: false },
      { text: "1. The billing can be processed  2. Close purchase requisitions are deleted", correct: false },
      { text: "1. The billing rule is executed  2. Close purchase requisitions are deleted", correct: false },
      { text: "1. The invoices can be processed  2. Open purchase requisitions are deleted", correct: true }
    ]
  },
  {
    question: "Which of the following represents an overarching unity of all organizational elements in SAP S/4HANA?",
    answers: [
      { text: "Company code", correct: false },
      { text: "Operating concern", correct: false },
      { text: "Client", correct: true },
      { text: "Controlling area", correct: false }
    ]
  },
  {
    question: "What types of SAP Fiori applications directly use SAP HANA functions?",
    answers: [
      { text: "1. Transactional 2. Fact sheet", correct: false },
      { text: "1. S/4 Hana 2. Hana", correct: false },
      { text: "1. SAP ERP 2. Analytical", correct: false },
      { text: "1. Analytical 2. Fact Sheet", correct: true }
    ]
  },
  {
    question: "Which objects can be assigned to a purchasing organization?",
    answers: [
      { text: "1. Plant 2. Supplier only 3. Sales master", correct: false },
      { text: "1. Area 2. Supplier only 3. Production master", correct: false },
      { text: "1. Plant 2. Supplier only 3. Production master", correct: false },
      { text: "1. Plant 2. Supplier 3. Material master", correct: true }
    ]
  },
  {
    question: "Which master data records are used in extended planning? ",
    answers: [
      { text: "1. Sales 2. Order", correct: false },
      { text: "1. Product  2. Location", correct: true },
      { text: "1. Client 2. Billing", correct: false },
      { text: "1. Values 2. Location", correct: false }
    ]
  },
  {
    question: "You want the SAP S/4HANA system to perform product cost planning. Which master data is used to calculate the quantity structure? ",
    answers: [
      { text: "1. Work plan 2. Work list", correct: false },
      { text: "1. Parts list  2. Work plan", correct: true },
      { text: "1. Parts list 2. Parts Plan", correct: false },
      { text: "1. Work plan 2. Work Parts", correct: false }
    ]
  },
  {
    question: "Which MRP control parameter defines the scope of a planning run, if that the system only takes into account changes that are within the planning horizon and only schedules materials to which MRP-relevant changes have been made?",
    answers: [
      { text: "Processing key Ariba", correct: false },
      { text: "Processing key SAP", correct: false },
      { text: "Processing key NETCH", correct: true },
      { text: "Processing key Fiori", correct: false }
    ]
  },
  {
    question: "Which organizational elements are assigned a warehouse number in the SAP corporate structure assigned?",
    answers: [
      { text: "1. plant  2. Storage location", correct: true },
      { text: "1. Client 2. Storage location", correct: false },
      { text: "1. Client 2. Warehouse", correct: false },
      { text: "1. plant 2. Client", correct: false }
    ]
  },
  {
    question: "What happens when you post a goods issue in a delivery document in sales?",
    answers: [
      { text: "1. The billing due list is updated  2. The Production quantity is updated  3. A material ledger billing is created", correct: false },
      { text: "1. The billing due list is updated 2. Production quantity", correct: false },
      { text: "1. The billing due list is updated  2. The inventory quantity is updated  3. A material ledger document is created", correct: true },
      { text: "A material ledger document is created", correct: false }
    ]
  },
  {
    question: "You create a new company code that you assign to the group controlling area want to assign which characteristics the new company code must have with the others company codes that are already assigned to the controlling area have in common?",
    answers: [
      { text: "1. Sales order 2. Fiscal year line", correct: false },
      { text: "1. Fiscal year variant  2. Operational chart of accounts", correct: true },
      { text: "1. Fiscal year group 2. Operational link of account", correct: false },
      { text: "Operational chart of accounts", correct: false }
    ]
  },
  {
    question: "Which data properties does the condition type control when creating condition master records?",
    answers: [
      { text: "1. Jaw bone 2. Squadrons", correct: false },
      { text: "1. Validity period 2. Scouting", correct: false },
      { text: "1. Validity period  2. Squadrons", correct: true },
      { text: "Squadrons", correct: false }
    ]
  },
  {
    question: "What does a workplace control?",
    answers: [
      { text: "1. Calculation of the costs for services provided   2. Capacity availability", correct: true },
      { text: "1. Calculation error 2. Capability ability", correct: false },
      { text: "1. human and robot error 2. Calculation of the costs for services provided", correct: false },
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
      { text: "none", correct: false },
      { text: "1. Accounts payable account (Creditor Account)  2. Tax account", correct: false },
      { text: "1. Asset account  2. Accounts payable account (Creditor Account)  3. Tax account", correct: true },
      { text: "1. Asset account 2. Sales order 3. Account type", correct: false }
    ]
  },
  {
    question: "A goods issue is posted for a production order. What's the score? ",
    answers: [
      { text: "none", correct: false },
      { text: "1. The actual costs are updated in the production order.  2. Productionreservation is reduced.  3. A material billing document is created.", correct: false },
      { text: "1. The actual costs are updated in the production order.  2. Material reservation is reduced.  3. A material ledger document is created.", correct: true },
      { text: "1. The actual costs are deleted in the production order.  2. Material reservation is reduced.  3. A material ledger document is created.", correct: false }
    ]
  },
  {
    question: "What is a typical sequence of process steps within the scope of planned maintenance",
    answers: [
      { text: "Create message - ???Create order - Release type - Sales order - Complete the order", correct: false },
      { text: "Create pattern - ???Create bill - Release order - Execute order - Complete the order", correct: false },
      { text: "None", correct: false },
      { text: "Create message - ???Create order - Release order - Execute order - Complete the order", correct: true }
    ]
  },
  {
    question: "What is created when you make a valuated goods receipt for consumables book?",
    answers: [
      { text: "Cost accounting document", correct: true },
      { text: "None", correct: false },
      { text: "SAP Fiori document", correct: false },
      { text: "Personal Sales document", correct: false }
    ]
  },
  {
    question: "What can you record in the overall confirmation of a maintenance order?",
    answers: [
      { text: "PARSE readings", correct: false },
      { text: "Iranes readings", correct: false },
      { text: "Meter readings", correct: true },
      { text: "pokusti readings", correct: false }
    ]
  },
  {
    question: "For what reasons might you want to create an equipment master record?",
    answers: [
      { text: "1. To carry out maintenance measure 2. To collect technical data about an object over a long period of time and to evaluate.", correct: false },
      { text: "1. To carry out maintenance measures for certain parts of your technical system carry out and record long-term evaluation.  2. To collect technical data about an object over a long period of time and to evaluate.", correct: true },
      { text: "1. Carrying out the billing material 2. Creating order of the customer", correct: false },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What does a booking key control?",
    answers: [
      { text: "1. Account holder 2. Debit/Credit posting", correct: false },
      { text: "1. Account name 2. Account type", correct: false },
      { text: "1. Order/Billing 2. Account type", correct: false },
      { text: "1. Account type  2. Debit/credit posting", correct: true }
    ]
  },
  {
    question: "Which objects can be assigned to a profit center? ",
    answers: [
      { text: "None of the above", correct: false },
      { text: "1. b. production  2. Sales order item", correct: false },
      { text: "1. b. material  2. Sales billing item", correct: false },
      { text: "1. b. material  2. Sales order item", correct: true }
    ]
  },
  {
    question: "What are the advantages of using a business partner in SAP S/4HANA?",
    answers: [
      { text: "1. It increases the amount of redundant data.  2. It take away the uniform architecture.", correct: false },
      { text: "none", correct: false },
      { text: "1. It expand the number of redundant data.  2. It offers a pattern architecture.", correct: false },
      { text: "1. It reduces the amount of redundant data.  2. It offers a uniform architecture.", correct: true }
    ]
  },
  {
    question: "Which element of a maintenance order contains the field values for -Workplace-, “Tax code” and “wage information”?",
    answers: [
      { text: "Occurrence / Process", correct: true },
      { text: "Nupture / Process", correct: false },
      { text: "none", correct: false },
      { text: "Ariba / Process", correct: false }
    ]
  },
  {
    question: "Which planning tool prioritizes customer order forecasting and planning strategically use inventory buffers? ",
    answers: [
      { text: "False", correct: false },
      { text: "Demand-filling material planning pipe (DFMPP)", correct: false },
      { text: "Demand-driven material requirements planning (DDMRP)", correct: true },
      { text: "Demand-driven production requirements planning (DDPRP", correct: false }
    ]
  },
  {
    question: "At which step is the imputed profit and market segment calculation carried out updated? ",
    answers: [
      { text: "Save billing center X", correct: false },
      { text: "Save billing Area X", correct: false },
      { text: "Save billing document. X", correct: true },
      { text: "Save billing type X", correct: false }
    ]
  },
  {
    question: "What is the correct term for a group of dependencies, operations and relationships in chronological order in a project? ",
    answers: [
      { text: "Wifi plan", correct: false },
      { text: "Internet plan", correct: false },
      { text: "Network plan", correct: true },
      { text: "Hotspot plan", correct: false }
    ]
  },
  {
    question: "You have created an asset master record. What other master data record can be created synchronously? ",
    answers: [
      { text: "Utensils", correct: false },
      { text: "Tools", correct: false },
      { text: "Material", correct: false },
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
      { text: "Secondary cost map", correct: false },
      { text: "Primary cost type", correct: false },
      { text: "Secondary cost type", correct: true },
      { text: "Primary cost map", correct: false }
    ]
  },
  {
    question: "Which master data is directly assigned to a company code",
    answers: [
      { text: "1. Attachment 2. Sales order", correct: false },
      { text: "1. Attachment  2. Cost centers", correct: true },
      { text: "1. Attachment 2. Order type", correct: false },
      { text: "none", correct: false }
    ]
  },
  {
    question: "Which residue processing strategy has the highest processing priority and will used to release confirmed inventory to help plan other orders to prioritize future inventory requirements?",
    answers: [
      { text: "Gain / Profit", correct: false },
      { text: "Pay / Bill", correct: false },
      { text: "Lose / Lost", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What is the correct sequence of individual steps in the sales process?",
    answers: [
      { text: "Create sales order - Check area - Edit delivery document - Post bill issue", correct: false },
      { text: "Create billing order - Check availability - Edit delivery paper - Post goods issue", correct: false },
      { text: "Create sales order - Check availability - Edit delivery document - Post goods issue", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "Which of the following are business partner types in SAP S/4HANA?",
    answers: [
      { text: "1. Client 2. Group 3. Organisation", correct: false },
      { text: "1. Organisation 2. Group 3. Worker", correct: false },
      { text: "1. organization 2. person 3. group", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "Which of the following are selection modes for MRP execution?",
    answers: [
      { text: "1. Mpg SAP 2. pMRP Live", correct: false },
      { text: "None", correct: false },
      { text: "1. h02 2. MSP Live 3. Typical MRP", correct: false },
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
      { text: "No process of the OUT-OF-TIME production limit of the current order", correct: false },
      { text: "The process of issuing and receiving goods is carried out using the order history monitored.", correct: true },
      { text: "SAPostistic process that is align with the new order process", correct: false }
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
      { text: "Ability control", correct: false },
      { text: "Capicity control", correct: false },
      { text: "Availability control", correct: true },
      { text: "None-availability control", correct: false }
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
      { text: "None", correct: false },
      { text: "1. Manage SAP in ecc 2. Create a profit and loss statement", correct: false },
      { text: "1. Manage level SAP in Fiori launchpad 2. Manage customer accounts", correct: false },
      { text: "1. Manage customer accounts  2. Create a profit and loss statement", correct: true }
    ]
  },
  {
    question: "For which document item do you have to specify a movement type if you have one post an accounting document?",
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
      { text: "1. accounting area only 2. segment", correct: false },
      { text: "segment only", correct: false },
      { text: "1. accounting area 2. segment", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "Which of the following statements applies to the distribution company structure",
    answers: [
      { text: "1. A sales channel can be assigned to several sales organizations.  2. A sales organization can only be assigned to one company code.   3. A division can be assigned to several sales organizations.", correct: true },
      { text: "1. Creating a billing process 2. A sales channel can be assigned to several sales organizations", correct: false },
      { text: "1. A sales channel can be assigned to several sales organizations 2. Production area and quantity increament", correct: false },
      { text: "None", correct: false }
    ]
  },
  {
    question: "What are some of the features of SAP Extended Warehouse Management?",
    answers: [
      { text: "1. Determination of the storage bin level for incoming goods 2. SAP Fiori launchpad", correct: false },
      { text: "Mobile device integration", correct: false },
      { text: "1. Mobile device integration  2. Determination of the storage bin level for incoming goods", correct: true },
      { text: "none", correct: false }
    ]
  },
  {
    question: "What is the result of implementing a planned order.",
    answers: [
      { text: "none", correct: false },
      { text: "1. A purchase requisition  2. A production order 3. Life pattern", correct: false },
      { text: "1. NEE DREW SAP 2. A purchase requisition  3.. A production order", correct: false },
      { text: "1. A purchase requisition  2. A production order", correct: true }
    ]
  },
  {
    question: "Which end-to-end business processes are used by SAP S/4HANA in connection with the intelligent enterprise covered?",
    answers: [
      { text: "1. Source to control 2. Production control 3. Sales planning", correct: false },
      { text: "1. Record to Report 2. Billing creation 3. Record to Report", correct: false },
      { text: "1. Source to control 2. Request to Service 3. Record to Report", correct: true },
      { text: "none of these", correct: false }
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
      { text: "1. Allocation of budgets 2. Allocation of order statements", correct: false },
      { text: "1. Allocation of budgets 2. Definition of responsibilities  3. Evaluation of aggregated data", correct: true },
      { text: "1. Definition of responsibilities 2. Sales order 3. Evaluation of sales", correct: false },
      { text: "Evaluation of aggregated data", correct: false }
    ]
  },
  {
    question: "What is document splitting used for?",
    answers: [
      { text: "To create a breakfast like profit line", correct: false },
      { text: "To break code of conduct", correct: false },
      { text: "To create balance reports by segments.", correct: true },
      { text: "Balance sheet matters", correct: false }
    ]
  },
  {
    question: "Which of the following order of steps in the procurement process is correct?",
    answers: [
      { text: "Check - order - payment - send - booking ", correct: false },
      { text: "none", correct: false },
      { text: "Determination of requirements - selection of suppliers - order processing - receipt of goods - Audit", correct: true },
      { text: "ID check - billing - payments - passmark", correct: false }
    ]
  },
  {
    question: "As part of customer-made production, a raw material must be transported from the warehouse to production be issued. To which order do you post the costs for the goods issue?",
    answers: [
      { text: "a. Customer order", correct: true },
      { text: "a. Sales order", correct: false },
      { text: "a. Bill paycheck", correct: false },
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
      { text: "1. Materials Management (MM)  2. Price Control (PC) 3. Customer Services (CS)", correct: false }
    ]
  },
  {
    question: "Which object can you invoice an internal order for?",
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
      { text: "1. Secure invoice 2. Sales security", correct: false },
      { text: "Post goods issue", correct: false },
      { text: "1. Secure invoice  2. Post goods issue", correct: true },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "What processes can be carried out automatically when you provide feedback for book a production order?",
    answers: [
      { text: "Goods Receipt", correct: false },
      { text: "1. Posting the actual costs 2. Goods receipt issue 3. Profits making", correct: false },
      { text: "1. Goods Receipt  2. Goods issue  3. Posting the actual costs", correct: true },
      { text: "Goods issue", correct: false }
    ]
  },
  {
    question: "Which intelligent technologies were enabled by the new line of code from SAP S/4HANAnactivated?",
    answers: [
      { text: "1. Network Creation (NC) 2. Internet of Things (IoT) 3. Machine use (MU)", correct: false },
      { text: "1. Artificial Intelligence (AI)  2. Internet of Things (loT)  3. Machine Learning (ML)", correct: true },
      { text: "1. Artificial Intelligence (AI) 2. Networking of Things (NoT) 3. Robot Learning (RL)", correct: false },
      { text: "no idea", correct: false }
    ]
  },
  {
    question: "Which business process activities create a financial accounting document?",
    answers: [
      { text: "1. Transfer inventory to another company code 2. Warehouse setting 3. Goods issue", correct: false },
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
      { text: "Fear of not making profit", correct: false }
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


//Clock
const time = document.getElementById("time");
const day = document.getElementById("day");
const midday = document.getElementById("midday");

let clock = setInterval(
	function calcTime() {
		let date_now = new Date();
		let hr = date_now.getHours();
		let min = date_now.getMinutes();
		let sec = date_now.getSeconds();
		let middayValue = "AM";

		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];

		day.textContent = days[date_now.getDay()];

		middayValue = hr >= 12 ? "PM" : "AM";

		if (hr == 0) {
			hr = 12;
		} else if (hr > 12) {
			hr -= 12;
		}

		hr = hr < 10 ? "0" + hr : hr;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;

		time.textContent = hr + ":" + min + ":" + sec;
		midday.textContent = middayValue;
	},

	1000
);

//Countdown Timer
const eventDate = new Date().getTime() + 1000 * 90 * 60;        // date of the Event we countdown - 1hr from refresh

const timer = setInterval(() => {
    const actualTime = new Date().getTime();
    const difference = eventDate - actualTime; 
    console.log(difference);

    const minutes = difference % (1000 * 90 * 60) / (1000 * 60);
    const seconds = difference % (1000 * 60) / 1000;

    const minDozens = Math.floor(minutes / 10);
    const minUnity = Math.floor(minutes % 10);
    const secDozens = Math.floor(seconds / 10);
    const secUnity = Math.floor(seconds % 10);

    const hMinDozens = document.getElementById('min-dozens');
    const hMinUnits = document.getElementById('min-unity');
    const hSecDozens = document.getElementById('sec-dozens');
    const hSecUnits = document.getElementById('sec-unity');

    hMinDozens.innerHTML = minDozens;
    hMinUnits.innerHTML = minUnity;
    hSecDozens.innerHTML = secDozens;
    hSecUnits.innerHTML = secUnity;

    hMinDozens.classList.remove('timer-blur');
    hMinUnits.classList.remove('timer-blur');
    hSecDozens.classList.remove('timer-blur');
    hSecUnits.classList.remove('timer-blur');

    if(seconds % 1 < 0.3){
        hSecUnits.classList.add('timer-blur'); // second update
        if(secUnity == 0) {
            hSecDozens.classList.add('timer-blur');     // second dozens update
            if(secDozens == 0) {
                hMinUnits.classList.add('timer-blur');  // min update
                if(minUnity == 0) {
                    hMinDozens.classList.add('timer-blur'); // min dozens update
                }
            }
        }
    }
    

    if(difference < 0){
        document.getElementById('message').innerHTML = "Thank you for nice time together 😄";
        
      hSecUnits.classList.remove('timer-blur');
      
        hMinDozens.innerHTML = 0;
        hMinUnits.innerHTML = 0;
        hSecDozens.innerHTML = 0;
        hSecUnits.innerHTML = 0;
        clearInterval(timer);
    }
}, 200);