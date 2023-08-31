import React, { useEffect, useState } from 'react'
import "./style.css"

const ToDo = () => {

  // geting local storage data............
  const getData = () => {
    const lists = localStorage.getItem("myTodoList")

    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  }

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getData);
  const [editedItem, setEditedItem] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false)

  // add item ..............
  const addItem = () => {
    if (!inputData) {
      alert(`pls fill the Data`)
    }
    else if (toggleBtn) {
      setItems(items.map((curElem) => {
        if (curElem.id === editedItem) {
          return { ...curElem, name: inputData }
        } else
          return curElem;
      })
      )
      setInputData("");
      setToggleBtn(false);
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(), name: inputData
      }

      setItems([...items, myNewInputData]);
      setInputData("");
    }
  }

  // edit items...................
  const editItem = (index) => {
    const edited = items.find((curElem) => {
      return curElem.id === index;
    })
    setInputData(edited.name);
    setEditedItem(index);
    setToggleBtn(true);
  }



  // delete section......

  const deleteItem = (index) => {
    const updatedItems = items.filter(curElem => curElem.id !== index);
    setItems(updatedItems);
  }

  const removeAll = () => setItems([]);

  // local Storage.................

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items))
  }, [items])

    useEffect(()=>{
      document.title = "ToDo-List"
    },[])

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images(ToDo)/todo.svg" alt="img" />
            <figcaption>Add Items here😁</figcaption>
          </figure>
          <div className="add-items">
            <input type="</>" placeholder='✍Add Item' value={inputData} onChange={(event) => setInputData(event.target.value)} />
            {toggleBtn ? <i class="btn2 fa-solid fa-pen-to-square" onClick={addItem} /> : <i class="btn2 fa-solid fa-plus fa-beat" onClick={addItem} />}

          </div>
          <div className="show-items">

            {items.map((curElem, index) => {
              return (
                <div className="each-item" key={curElem.id}>
                  <h3>{index + 1}.&nbsp;{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className="fa-solid fa-pen-to-square fa-lg" onClick={() => editItem(curElem.id)} />
                    <i className="fa-solid fa-trash fa-lg" onClick={() => deleteItem(curElem.id)}></i>
                  </div>

                </div>

              )
            })}


          </div>
          <button className='btn3' onClick={() => removeAll()} >Remove All</button>
        </div>
      </div>
    </>
  )
}

export default ToDo