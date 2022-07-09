import './main.css';
import './library.css';
// import './bootstrap.min.css';

import {cards_slice} from './cards_slice';
import { useSelector, useDispatch } from 'react-redux';
// =================

function Card({card_index}) {

  const state = useSelector(store => store.cards_slice)
  const dispatch = useDispatch();
  const card =state.card_list[card_index]
  return (
    <div className="card" >
      <div className="hsplit" >
        <div className="card_field_name" >Card Name:</div>
        <div className="card_field_height" >
        {!card.is_edit ? card.card_name : <input className="card_field_input form-control" value={card.card_name} onChange={(e) =>dispatch(cards_slice.actions.change_card_name({card_index:card_index, name: e.target.value}))}/>}
        </div>
      </div>
      <div className="hsplit">
        <div className="card_field_name" >Project Budget: </div>
        <div className="card_field_height" >
          {!card.is_edit ? card.project_budget : <input type="number" className="card_field_input form-control" value={card.project_budget} onChange={(e)=>dispatch(cards_slice.actions.change_project_budget({card_index: card_index, project_budget: e.target.value}))}/>}
        </div>
      </div>
      <div className="hsplit">
        <div className="card_field_name">Project End Date: </div>
        <div className="card_field_height" >
         {!card.is_edit? card.project_end_date : <input className="card_field_input form-control" type="datetime-local" value={card.project_end_date} onChange={(e)=>dispatch(cards_slice.actions.change_project_date({card_index: card_index, project_date: e.target.value }))}/>}
        </div>
      </div>
      <div>
        <div style={{borderBottom: "solid #ddd 1px"}}></div>
        <div className="hsplit" >
          <button className="btn btn-primary card-button" onClick={()=>dispatch(cards_slice.actions.edit(card_index)) } >{card.is_edit ? "Save" : "Edit"}
          </button>
          <button className="btn btn-primary card-button" onClick={() => dispatch(cards_slice.actions.card_delete(card_index))} >Delete</button>
          <button className="btn btn-primary card-button" onClick={() =>dispatch(cards_slice.actions.copy_card(card_index))}>Copy Card</button>
        </div>
      </div>  
    </div>
  );
}

// ===============================
function MainFunc2(props) {
  const state = useSelector(store => store.cards_slice)
  const dispatch = useDispatch();
  return (
    <div style={{maxWidth: "1200px", margin: "auto"}} >
      <div className="top_card" >
        <span>Total Projects: {state.card_list.length}, Total Budget = {state.total_budget}</span>
      </div>

      <div className="hsplit">
        {state.card_list.map((card, card_index)=> (
          <div className="col-lg-4 col-sm-6 col-xs-12" >
            <Card card_index={card_index}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFunc2;
