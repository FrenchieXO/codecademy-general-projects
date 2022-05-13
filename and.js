const groceries = arr => {
    let itemArray = arr.map(a => a.item);
    let initialItems = []
    for (let i = 0; i < itemArray.length - 2; i++) {
      initialItems.push(itemArray[i])
    }
    let lastTwoItems = []
    for (let i = itemArray.length - 2; i < itemArray.length; i++) {
      lastTwoItems.push(itemArray[i])
    }
    let itemString = initialItems.join(', ') + ', ' + lastTwoItems.join(' and ')
    let finalString;
    if(itemArray.length === 2) {
      finalString = lastTwoItems.join(' and ')
    } else if (itemArray.length === 1) {
      finalString = lastTwoItems.join('')
    } else {
      finalString = itemString
    }
    console.log(finalString)
    return finalString
  }
  
  
  
  //groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}, {item: 'Broccoli'}] )
  
  
  //groceries( [{item: 'Bread'}, {item: 'Butter'}] );
  
  //groceries( [{item: 'Cheese Balls'}] );
  
  groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])