import { Box, Stack, Typography, Avatar, Paper } from "@mui/material";

const reviews = [
  {
    name: "Helen S.",
    text: "A truly unique experience! The team made me feel so welcome and my hair has never looked better. The church setting is stunning.",
    avatar: "/exampleSite/review1.jpg",
  },
  {
    name: "Mark T.",
    text: "Professional, friendly staff and a relaxing atmosphere. I loved the attention to detail and the results were fantastic.",
    avatar: "/exampleSite/review2.jpg",
  },
  {
    name: "Rachel P.",
    text: "Beautiful salon with a special vibe. Emily’s beauty treatments are the best I’ve had. Highly recommended!",
    avatar: "/exampleSite/review3.jpg",
  },
];

export const ReviewSection = () => (
  <Box sx={{ py: 4, background: "#fff" }}>
    <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: "bold" }}>
      What Our Clients Say
    </Typography>
    <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center" justifyContent="center">
      {reviews.map((review, idx) => (
        <Paper key={idx} elevation={3} sx={{ p: 2, maxWidth: 320, textAlign: "center", minHeight: { xs: 100, md: 120 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            {review.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "{review.text}"
          </Typography>
        </Paper>
      ))}
    </Stack>
  </Box>
);