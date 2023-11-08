import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Autosuggest from 'react-autosuggest';

// import 'codemirror/theme/material.css'; // Import CodeMirror theme CSS

const MyEditor = () => {
    const [isMenu1Open, setIsMenu1Open] = useState(false);
    const [isMenu2Open, setIsMenu2Open] = useState(false);
    const [isMenu3Open, setIsMenu3Open] = useState(false);
    const [isMenu4Open, setIsMenu4Open] = useState(false);
    const [isMenu5Open, setIsMenu5Open] = useState(false);
    const [editor1Content, setEditor1Content] = useState('Nothin1');
    const [editor2Content, setEditor2Content] = useState('Nothin2');
    const [editor3Content, setEditor3Content] = useState('Nothin3');
    const [editor4Content, setEditor4Content] = useState('Nothin4');
    const [editor5Content, setEditor5Content] = useState('Nothin5');


    const { data, error, isLoading } = useQuery('suggestions', async () => {
        const response = await fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete');
        return response.json();
      });

      const suggestions = data ? data : [];

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0
          ? []
          : ['function1', 'function2', 'function3', 'function4', 'function5'].filter(
              (func) => func.toLowerCase().slice(0, inputLength) === inputValue
            );
      };
    
      // Autosuggest component settings for each editor
      const autosuggestProps1 = {
        suggestions: getSuggestions(editor1Content),
        onSuggestionsFetchRequested: ({ value }) => {
          // Define the logic for fetching suggestions for editor 1
        },
        onSuggestionsClearRequested: () => {
          // Define the logic for clearing suggestions for editor 1
        },
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      };
      
      const autosuggestProps2 = {
        suggestions: getSuggestions(editor2Content),
        onSuggestionsFetchRequested: ({ value }) => {
          // Define the logic for fetching suggestions for editor 2
        },
        onSuggestionsClearRequested: () => {
          // Define the logic for clearing suggestions for editor 2
        },
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      };

      const autosuggestProps3 = {
        suggestions: getSuggestions(editor4Content),
        onSuggestionsFetchRequested: ({ value }) => {
          // Define the logic for fetching suggestions for editor 1
        },
        onSuggestionsClearRequested: () => {
          // Define the logic for clearing suggestions for editor 1
        },
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      };
      
      const autosuggestProps4 = {
        suggestions: getSuggestions(editor4Content),
        onSuggestionsFetchRequested: ({ value }) => {
          // Define the logic for fetching suggestions for editor 2
        },
        onSuggestionsClearRequested: () => {
          // Define the logic for clearing suggestions for editor 2
        },
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      };

      const autosuggestProps5 = {
        suggestions: getSuggestions(editor5Content),
        onSuggestionsFetchRequested: ({ value }) => {
          // Define the logic for fetching suggestions for editor 1
        },
        onSuggestionsClearRequested: () => {
          // Define the logic for clearing suggestions for editor 1
        },
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      };
      
      


  // Placeholder functions and API autocomplete
  const autoCompleteAPI = (text) => {
    // Implement API autocomplete logic here
    return `API suggestion for ${text}`;
  };

  const handleArrowClick1 = () => {
    setIsMenu1Open(!isMenu1Open);
  };

  const handleArrowClick2 = () => {
    setIsMenu2Open(!isMenu2Open);
  };

  const handleArrowClick3 = () => {
    setIsMenu3Open(!isMenu3Open);
  };

  const handleArrowClick4 = () => {
    setIsMenu4Open(!isMenu4Open);
  };

  const handleArrowClick5 = () => {
    setIsMenu5Open(!isMenu5Open);
  };

  const handleEditor1Change = (event) => {
    setEditor1Content(event.target.value);
  };

  const handleEditor2Change = (event) => {
    setEditor2Content(event.target.value);
  };

  const handleEditor3Change = (event) => {
    setEditor3Content(event.target.value);
  };

  const handleEditor4Change = (event) => {
    setEditor4Content(event.target.value);
  };

  const handleEditor5Change = (event) => {
    setEditor5Content(event.target.value);
  };


  return (
    <>

    {/* Title 1 */}
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick1}>
          Google GSuite Expense {isMenu1Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu1Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px' }}>
          <Autosuggest
            {...autosuggestProps1}
            inputProps={{
              value: editor1Content,
              onChange: handleEditor1Change,
            }}
          />
        </div>
      )}
    </div>
            {/* Title 2 */}
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick2}>
          Hardware Expense {isMenu2Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu2Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px' }}>
          <Autosuggest
            {...autosuggestProps2}
            inputProps={{
              value: editor2Content,
              onChange: handleEditor2Change,
            }}
          />
        </div>
      )}
    </div>
            {/* Title 3 */}
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick3}>
          Dental & Vision Expense {isMenu3Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu3Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px' }}>
          <Autosuggest
            {...autosuggestProps3}
            inputProps={{
              value: editor3Content,
              onChange: handleEditor3Change,
            }}
          />
        </div>
      )}
    </div>
            {/* Title 4 */}
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick4}>
          Health Insurance Expense {isMenu4Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu4Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px' }}>
          <Autosuggest
            {...autosuggestProps4}
            inputProps={{
              value: editor4Content,
              onChange: handleEditor4Change,
            }}
          />
        </div>
      )}
    </div>
            {/* Title 5 */}
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick5}>
          Advertising Budget {isMenu5Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu5Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px' }}>
          <Autosuggest
            {...autosuggestProps5}
            inputProps={{
              value: editor5Content,
              onChange: handleEditor5Change,
            }}
          />
        </div>
      )}
    </div>
    </>
  );
};

export default MyEditor;
