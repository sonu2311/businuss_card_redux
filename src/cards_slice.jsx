import {createSlice } from '@reduxjs/toolkit';


export const cards_slice = createSlice({
  name: 'cards_slice',
  initialState: {
    books: [
      {id: 1, is_open: true, price: 60000},
      {id: 2, is_open: false, price: 20},
      {id: 3, is_open: true, price: 30},
    ],
    id_counter: 5,
    card_list: [
      {card_name :"Project01",
       project_budget: 5000,
       project_end_date:"2022-10-06T14:45",
       is_edit:false
      },
      {card_name :"Project02",
       project_budget: 6000,
       project_end_date:"2022-10-06T14:45",
       is_edit:false
      },
      {card_name :"Project03",
       project_budget: 7000,
       project_end_date:"2022-10-06T14:45",
       is_edit:false
      },
      {card_name :"Project04",
       project_budget: 8000,
       project_end_date:"2022-10-06T14:45",
       is_edit:false
      }
    ],
    total_budget: 26000
  },
  reducers: {
    add: function (state) {
      state.books.push({id: state.id_counter, is_open: false, price: 7})
      state.id_counter += 1
    },
    open: function (state, {payload: book_index}) {
      state.books[book_index].is_open = true
    },
    close: function (state, {payload: book_index}) {
      state.books[book_index].is_open = false
    },
    increase_price: function (state, {payload: {book_index, price}}) {
      state.books[book_index].price += price
    },
    change_card_name:function (state, {payload: {card_index, name}}) {
      state.card_list[card_index].card_name = name
    },
    change_project_budget:function (state, {payload: {card_index, project_budget}}) {
      state.card_list[card_index].project_budget = parseInt(project_budget)
      const card_list = state.card_list
      let total_budget = 0
      for(var i = 0; i < card_list.length; i++) {
        total_budget += card_list[i].project_budget
      }
      state.total_budget = total_budget
    },
    change_project_date:function (state, {payload: {card_index, project_date}}) {
      state.card_list[card_index].project_end_date = project_date
    },
    edit:function(state, {payload: card_index}){
      state.card_list[card_index].is_edit =!state.card_list[card_index].is_edit
    },
    copy_card:function(state, {payload: card_index}){
      // Angular : state.card_list.push(card)
      state.card_list.push({
        card_name :"Project"+ state.id_counter,
        project_budget: state.card_list[card_index].project_budget,
        project_end_date: state.card_list[card_index].project_end_date,
        is_edit: false})
      state.total_budget = state.total_budget + state.card_list[card_index].project_budget
      state.id_counter+=1
    },
    card_delete: function(state, {payload:card_index}) {
      const card_list = state.card_list
      const budget_loss = card_list[card_index].project_budget
      let new_card_list = []
      for(var i = 0; i < card_list.length; i++) {
        if (i != card_index) {
          new_card_list.push(card_list[i])
        }
      }
      state.card_list = new_card_list
      state.total_budget = state.total_budget - budget_loss
    }
  }
})

export default cards_slice.reducers
