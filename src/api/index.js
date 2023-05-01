import * as apiLinks from "../constants/apiLinks";
import request from "./makeRequest";

const api = {
  // getDemoData: (data) => request.get(apiLinks.INITIAL, data),
  // getUserInfo: (data) => request.post(apiLinks.API_USER_GET_INFO, data),
  // login: (data) => request.post(apiLinks.API_USER_LOGIN, data),
  // danhSachDuLieuTree: (params) =>
  //   request.get(`${apiLinks.API_DULIEU}/danhSachDuLieuTree?${params}`),
  // danhMucDuLieuTheoNguoiDung: (userId) =>
  //   request.get(`${apiLinks.API_DULIEU}/danhMucDuLieuTheoNguoiDung/${userId}`),
  // themMoiDuLieuExcel: (data) =>
  //   request.postUploadFile(`${apiLinks.API_DULIEU}/themMoiDuLieuExcel`, data),
  // themMoiDuLieuSHP: (data) =>
  //   request.postUploadFile(`${apiLinks.API_DULIEU}/themMoiDuLieuSHP`, data),
  // themMoiDuLieu: (data) =>
  //   request.postThemMoiDuLieu(`${apiLinks.API_DULIEU}/themMoiDuLieu`, data),
  // taoFileJson: (data) =>
  //   request.postThemMoiDuLieu(`${apiLinks.API_BAN_DO}/taoFileJson`, data),
  // themMoiDanhMucDuLieu: (data) =>
  //   request.post(`${apiLinks.API_DULIEU}/themMoiDanhMucDuLieu`, data),
  // capNhatDanhMucDuLieu: (data, dmDuLieuId) =>
  //   request.post(
  //     `${apiLinks.API_DULIEU}/capNhatDanhMucDuLieu/${dmDuLieuId}`,
  //     data
  //   ),
  // capNhatDuLieu: (data) =>
  //   request.postThemMoiDuLieu(`${apiLinks.API_DULIEU}/capNhatDuLieu`, data),
  // capNhatBanDo: (data) =>
  //   request.postThemMoiDuLieu(`${apiLinks.API_BAN_DO}/capNhatBanDo`, data),
  // xoaDanhMucDuLieu: (data, dmDuLieuId) =>
  //   request.post(`${apiLinks.API_DULIEU}/xoaDanhMucDuLieu/${dmDuLieuId}`, data),
  // xoaDuLieu: (data, duLieuId) =>
  //   request.post(`${apiLinks.API_DULIEU}/xoaDuLieu/${duLieuId}`, data),
  // xoaAPI: (data, apiId) =>
  //   request.post(`${apiLinks.API_API}/xoaAPI/${apiId}`, data),
  // xoaWebgis: (data, webgisId) =>
  //   request.post(`${apiLinks.API_BAN_DO}/xoaBanDo/${webgisId}`, data),
  // danhSachAPITree: () => request.get(`${apiLinks.API_API}/danhSachAPITree`),
  // themMoiDanhMucAPI: (data) =>
  //   request.post(`${apiLinks.API_API}/themMoiDanhMucAPI`, data),
  // danhMucAPITheoNguoiDung: (userId) =>
  //   request.get(`${apiLinks.API_API}/danhMucAPITheoNguoiDung/${userId}`),
  // duLieuTheoNguoiDung: (userId, search) =>
  //   request.get(
  //     `${apiLinks.API_DULIEU}/duLieuTheoNguoiDung/${userId}?search=${
  //       search ? search : ""
  //     }`
  //   ),
  // searchDuLieuTheoNguoiDungTheoDanhMuc: (userId, dmDuLieuId) =>
  //   request.get(
  //     `${apiLinks.API_DULIEU}/searchDuLieuTheoNguoiDungTheoDanhMuc/${userId}/${dmDuLieuId}`
  //   ),
  // styleTheoNguoiDung: (userId, typeStyle) =>
  //   request.get(
  //     `${apiLinks.API_STYLE}/styleTheoNguoiDung/${userId}?typeStyle=${typeStyle}`
  //   ),
  // tatCaCongCu: () => request.get(`${apiLinks.API_CONG_CU}/tatCaCongCu/`),
  // themMoiAPI: (data) => request.post(`${apiLinks.API_API}/themMoiAPI`, data),
  // capNhatAPI: (data) =>
  //   request.post(`${apiLinks.API_API}/capNhatAPI/${data.apiId}`, data),
  // danhSachBanDoTheoNguoiDung: (userId, search) =>
  //   request.get(
  //     `http://14.248.94.155:4320/api/banDo/danhSachBanDoTheoNguoiDung/${userId}?search=${
  //       search && search
  //     }`
  //   ),
  // signup: (data) => request.post(apiLinks.API_USER_SIGNUP, data),
  // apiTheoNguoiDung: (userId, search) =>
  //   request.get(
  //     `${apiLinks.API_API}/apiTheoNguoiDung/${userId}?search=${
  //       search && search
  //     }`
  //   ),
  // countApi: (params) =>
  //   request.get(`${apiLinks.API_ADMIN}/countApi?${params && params}`),
  // countDuLieu: (params) =>
  //   request.get(`${apiLinks.API_ADMIN}/countDuLieu?${params && params}`),
  // countWebgis: (params) =>
  //   request.get(`${apiLinks.API_ADMIN}/countWebgis?${params && params}`),
  // countUser: () => request.get(`${apiLinks.API_ADMIN}/countUser`),
  // allUser: (params) =>
  //   request.get(`${apiLinks.API_ADMIN}/allUser?${params && params}`),
  // tatCaDuLieu: (params) =>
  //   request.get(`${apiLinks.API_DULIEU}/tatCaDuLieu?${params && params}`),
  // tatCaApi: (params) =>
  //   request.get(`${apiLinks.API_API}/tatCaApi?${params && params}`),
  // xoaNguoiDung: (data) =>
  //   request.post(`${apiLinks.API_ADMIN}/xoaNguoiDung`, data),
  // toShare: (data) => request.post(`${apiLinks.API_SHARE}/toShare`, data),
  // shareByUser: (params) =>
  //   request.get(`${apiLinks.API_SHARE}/shareByUser?${params && params}`),
  // shared: (params) =>
  //   request.get(`${apiLinks.API_SHARE}/shared?${params && params}`),
  // xoaBangDuLieu: (data) =>
  //   request.post(`${apiLinks.API_DULIEU}/xoaBangDuLieu`, data),
  // themMoiStyle: (data) =>
  //   request.postThemMoiDuLieu(`${apiLinks.API_STYLE}/themMoiStyle`, data),
  // capNhatThongTinNguoiDung: (data) =>
  //   request.postThemMoiDuLieu(
  //     `${apiLinks.API_ADMIN}/capNhatThongTinNguoiDung`,
  //     data
  //   ),
  // queryDuLieu: (params) =>
  //   request.get(`${apiLinks.API_QUERY_DU_LIEU}${params && params}`),

  login: (data) => request.login(apiLinks.API_LOGIN, data),

  getAllTour: (params, setLoading) =>
    request.get(`${apiLinks.API}/tour?${params}`, setLoading),
  getDetailTour: (params, setLoading) =>
    request.get(`${apiLinks.API}/tour/${params}`,setLoading),
  createTour: (data, callBack, setLoading) => {
    request.post(`${apiLinks.API}/tour`, data, callBack, setLoading)
  },
  updateTour: (data, callBack, setLoading) => {
    request.put(`${apiLinks.API}/tour/${data.idTour}`, data, callBack, setLoading)
  },
  deleteTour: (data, callBack, setLoading) => {
    request.delete(`${apiLinks.API}/tour/${data.idTour}`, data, callBack, setLoading)
  }
};
export default api;
