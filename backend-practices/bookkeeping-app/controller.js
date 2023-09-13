const controller = {};
// const file = require('./public/setting.json');
const fs = require('fs');


controller.add = (req, res, next) => {
  console.log(req.body);
  fs.readFile('./public/setting.json', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    const jsonData = JSON.parse(data);
    const newItemId = generateUniqueId(jsonData.bookkeeping);
    const newItem = {
      id: newItemId,
      ...req.body
    };
    jsonData.bookkeeping.push(newItem);

    function generateUniqueId(bookkeepingArray) {
      const maxId = bookkeepingArray.reduce((max, item) => (item.id > max ? item.id : max), 0);
      return maxId + 1;
    }

    fs.writeFile('./public/setting.json', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON data has been appended to the file successfully.');
      }
    });
  });
  next()
};

controller.delete = (req, res, next) => {
  const itemId = req.params.itemId;

  fs.readFile('./public/setting.json', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    try {
      const jsonData = JSON.parse(data);
      jsonData.bookkeeping = jsonData.bookkeeping.filter((item) => {
        console.log(item.id, Number(itemId))
        return item.id !== Number(itemId)
      });
      console.log(jsonData.bookkeeping)


      fs.writeFile('./public/setting.json', JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        res.json({ message: 'Item removed successfully' });
      });
    } catch (jsonParseError) {
      console.error('Error parsing JSON data:', jsonParseError);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
};




module.exports = controller;
