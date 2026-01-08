export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  // thêm field nếu register backend yêu cầu
}

export interface LoginResponse {
  token: string;
}
