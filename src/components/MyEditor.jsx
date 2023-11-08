import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Autosuggest from 'react-autosuggest';

import './MyEditor.module.css';

const MyEditor = () => {
    const [isMenu1Open, setIsMenu1Open] = useState(false);
    const [isMenu2Open, setIsMenu2Open] = useState(false);
    const [isMenu3Open, setIsMenu3Open] = useState(false);
    const [isMenu4Open, setIsMenu4Open] = useState(false);
    const [isMenu5Open, setIsMenu5Open] = useState(false);
    const [editor1Content, setEditor1Content] = useState('');
    const [editor2Content, setEditor2Content] = useState('');
    const [editor3Content, setEditor3Content] = useState('');
    const [editor4Content, setEditor4Content] = useState('');
    const [editor5Content, setEditor5Content] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    
    
    
    const { data, error, isLoading } = useQuery('suggestions', async () => {
        const response = await fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete');
        const data = await response.json();
        console.log(data); 
        return data.map(item => item.name); // Mapping the data to extract only the names for suggestions
    });

    const renderSuggestion = (suggestion, { query, isHighlighted }) => {
        return (
          <div
            style={{
              backgroundColor: isHighlighted ? 'blue' : 'white',
              border: isHighlighted ? '1px solid black' : 'none',
            }}
          >
            {suggestion}
          </div>
        );
      };
    
    const suggestions = data || []; // Use the API data for suggestions
    
    const handleSuggestionSelected = (event, { suggestionValue }) => {
        setSelectedItem(suggestionValue);
    };

    const shouldRenderSuggestions = (value) => value.trim().length > 0;

      const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0
          ? []
          : suggestions.filter((name) => name.toLowerCase().slice(0, inputLength) === inputValue);
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
        <div className='editor-container' style={{height: '75vh'}}>

    {/* Title 1 */}
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: 'gray', cursor: 'pointer' }} onClick={handleArrowClick1}>
          Google GSuite Expense {isMenu1Open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {/* Repeat for other titles */}
      </div>
      {isMenu1Open && (
          <div style={{ backgroundColor: 'lightgray', marginTop: '10px', width: '100%' }}>
          <Autosuggest

            {...autosuggestProps1}
            inputProps={{
              value: editor1Content,
              onChange: handleEditor1Change,
              style: { width: '100%', height: '2rem'},
            }}
          />
        </div>
      )}
    </div>
            {/* Title 2 */}
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
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
              style: { width: '100%', height: '2rem'},
            }}
          />
        </div>
      )}
    </div>
            {/* Title 3 */}
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
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
              style: { width: '100%', height: '2rem'},
            }}
          />
        </div>
      )}
    </div>
            {/* Title 4 */}
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
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
              style: { width: '100%', height: '2rem'},
            }}
          />
        </div>
      )}
    </div>
            {/* Title 5 */}
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
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
              style: { width: '100%', height: '2rem' },
            }}
          />
        </div>
      )}
    </div>
    </div>

    </>
  );
};

export default MyEditor;
