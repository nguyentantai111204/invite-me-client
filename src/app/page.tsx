import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
    <main>
      <Typography variant="h1">
        InviteMe
      </Typography>

      <Typography>
        Thiết kế thiệp mời online dễ dàng.
      </Typography>

      <Button variant="contained">
        Bắt đầu tạo thiệp
      </Button>
    </main>
  );    
}