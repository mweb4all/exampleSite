import { Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// Custom X (Twitter) SVG icon
const XIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M17.53 3H21L13.91 10.59L22.46 21H16.19L11.13 14.62L5.56 21H2L9.51 12.94L1.54 3H7.97L12.59 9.01L17.53 3ZM16.37 19H18.3L7.7 5H5.62L16.37 19Z" />
  </svg>
);
import InstagramIcon from "@mui/icons-material/Instagram";
import { grey } from "./Colours";

export interface SocialMediaProps {
  socialLinks: Record<"facebook" | "x" | "instagram", null | string>;
}

export const SocialMedia = ({ socialLinks }: SocialMediaProps) => {
  return (
    <Stack
      flexDirection="row"
      sx={{ backgroundColor: "white", border: `3px solid ${grey}` }}
    >
      {socialLinks.facebook !== null && socialLinks.facebook && (
        <IconButton color="inherit" href={socialLinks.facebook} target="_blank">
          <FacebookIcon />
        </IconButton>
      )}
      {socialLinks.x !== null && socialLinks.x && (
        <IconButton color="inherit" href={socialLinks.x} target="_blank">
          <XIcon />
        </IconButton>
      )}
      {socialLinks.instagram !== null && socialLinks.instagram && (
        <IconButton
          color="inherit"
          href={socialLinks.instagram}
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
      )}
    </Stack>
  );
};
