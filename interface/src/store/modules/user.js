import axios from '../../api/axios.js'

// state data
const state = {
    users: [],
};

// mutate state
const mutations = {
    setUsers(state, users) {
        state.users = users;
    },
};


// action -> define app data logic
const actions = {
    // get assignemnt => GET
    getUsers({ commit }) {
        axios.get('/users').then(res => {
            console.log(res);
            // store user in State
            commit('setUsers', res.data)
        })
    },
    // add assignment => POST
    addUser({ commit, dispatch }, formData) {
        axios.post('/add-user', formData)
            .then(res => {
                alert('user added')
                    // refetch to update data
                dispatch('getUsers')
            })
    },
};

// getters return requested data
const getters = {
    // get all assignment
    users(state) {
        return state.users
    },
    // get assignment list -> assignment menu
};

export default {
    state,
    mutations,
    actions,
    getters,
};