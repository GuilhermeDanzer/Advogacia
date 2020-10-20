import createDataContext from "./createDataContext";
import api from "../api/api";

const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
const articleReducer = (state, action) => {
  switch (action.type) {
    case "postArticle":
      return { ...state, msg: "Membro cadastrado com sucesso" };
    case "editArticle":
      return { ...state, msg: "Membro editado com sucesso" }; //{...state}
    case "getArticle":
      return { article: action.payload };
    default:
      return state;
  }
};
const getArticle = (dispatch) => async () => {
  try {
    const response = await api.get("/article");
    dispatch({ type: "getArticle", payload: response.data });

    //navigate('Show')
  } catch (error) {
    if (error.response === undefined) {
    } else {
      const erro = error.response.data;
      alert(erro.error);
    }
  }
};
const editArticle = (dispatch) => async (valores) => {
  try {
    const response = await api.post("/article/edit", valores);
    dispatch({ type: "editArticle", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
    //navigate('Show')
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};

const postArticle = (dispatch) => async (valores) => {
  try {
    const { title, resume, file } = valores;

    const data = new FormData();
    data.append("file", file);
    data.append("title", title);
    data.append("resume", resume);

    const response = await api.post("/article/cdn", data, config);
    dispatch({ type: "postArticle", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
    //navigate('Show')
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};
const deleteArticle = (dispatch) => async (valores) => {
  try {
    const response = await api.delete(`/article/${valores}`);
    dispatch({ type: "deletePost", payload: response.data });
    alert(response.data.msg);
    window.location.reload();
  } catch (error) {
    const erro = error.response.data;
    alert(erro.error);
  }
};
export const { Provider, Context } = createDataContext(
  articleReducer,
  { getArticle, postArticle, editArticle, deleteArticle },
  { article: [], msg: "" }
);
