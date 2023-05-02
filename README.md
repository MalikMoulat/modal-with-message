
# Modal with custom message

This repository contains all the source code of a modal component with custom message for react.




## Installation

Install the lib
```bash
npm install modal-with-message
# ou
yarn install modal-with-message
```
## Usage/Examples

```javascript
import { useState, useEffect } from 'react';
// Import Modal
import ModalMessage from 'modal-with-message';

//  Creates a button, when I click on it the state changes to true and the modal is displayed
function ButtonModal() {

    const [modal, setModal] = useState(false)

    // Function to display modal
    function displayModal(setvar){
        if (modal === true){
        return (
            <ModalMessage message={"Employee Created!"} setVar={setModal}/>
            )
        }
            return(
            ""
            )
    }

    return (
        <div className="App">
            {displayModal(setModal)}
        <button
            type="submit"
            className="openModal"
            onClick={() => {setModal(true);}}
        >
            Save
        </button>
        </div>
    )
}

export default ButtonModal;
```


## Authors

- [@MalikMoulat](https://github.com/MalikMoulat)

