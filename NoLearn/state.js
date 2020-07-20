const os = require('os');

const export_obj = {
  name: 'test',
  id: '333',

  mem_fun: function() {
    const mem = os.freemem() / os.totalmem()
    console.log(mem);
  },
}

module.exports = export_obj
