import React from "react";



function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    let parsedItem;
    React.useEffect(()=> {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
          }
        }catch(e){
          setError(e)
        }finally{
          setLoading(false);
        }
      }, 3000);
    }, [])
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
   
  
    return {
      item, 
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage}