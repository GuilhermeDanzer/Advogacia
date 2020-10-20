import createDataContext from "./createDataContext";
import api from "../api/api";

const teamReducer = (state, action) => {
  switch (action.type) {
    case "postTeam":
      return { ...state, msg: "Membro cadastrado com sucesso" };
    case "editTeam":
      return { ...state, msg: "Membro editado com sucesso" }; //{...state}
    case "getTeam":
      return { team: action.payload };
    default:
      return state;
  }
};
const getTeam = (dispatch) => async () => {
  try {
    const response = await api.get("/team");
    dispatch({ type: "getTeam", payload: response.data });

    //navigate('Show')
  } catch (error) {
    if (error.response === undefined) {
    } else {
      const erro = error.response.data;
      alert(erro.error);
    }
  }
};
const editTeam = (dispatch) => async (valores) => {
  try {
    const response = await api.post("/team/edit", valores);
    dispatch({ type: "editTeam", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
    //navigate('Show')
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};

const postTeam = (dispatch) => async (valores) => {
  try {
    const response = await api.post("/team", valores);
    dispatch({ type: "postTeam", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
    //navigate('Show')
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};
const deleteTeam = (dispatch) => async (valores) => {
  try {
    const response = await api.post("/team/delete", { _id: valores });
    dispatch({ type: "deletePost", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};
export const { Provider, Context } = createDataContext(
  teamReducer,
  { getTeam, postTeam, editTeam, deleteTeam },
  { team: [], msg: "" }
);
