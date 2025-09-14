import { Box, Stack, Typography, Avatar } from "@mui/material";

export const TeamMembers = ({ team }: { team: Array<{ name: string; role: string; intro: string; img: string }> }) => (
  <Box sx={{ py: 4, background: "#fff" }}>
    <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: "bold" }}>
      Meet Our Team
    </Typography>
    <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center" justifyContent="center">
      {team.map((member) => (
        <Box key={member.name} sx={{ textAlign: "center", maxWidth: 300 }}>
          <Avatar
            src={member.img}
            alt={member.name}
            sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {member.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
            {member.role}
          </Typography>
          <Typography variant="body2">{member.intro}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);