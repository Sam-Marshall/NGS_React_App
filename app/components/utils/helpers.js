var axios = require("axios");

// Helper functions for making API Calls
var helper = {

    getUser: function(userId) {
        return axios.get(`/api/user/${userId}`);
    },

   getUserInfo: () => {
     return axios.get('/api/user/0');
   },
};

// We export the API helper
module.exports = helper;
