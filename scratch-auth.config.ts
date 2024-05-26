import { ScratchAuth_config } from "scratch-auth-react/src/dist/config"

// セットアップファイル内で必要な設定を行います
const config: ScratchAuth_config = {
  redirect_url: `http://localhost:3000/api/auth`, // 必須
  title: `ScratchHub`, // オプション
  expiration: 30, // オプション
}

export default config