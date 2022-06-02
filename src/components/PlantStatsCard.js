import {
  alpha,
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";

function ProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        {...props}
        variant="determinate"
        thickness={props.size / 22}
        sx={{
          zIndex: 1,
          marginBottom: "-40%",
        }}
        style={{
          transform: "rotate(180deg)",
        }}
        value={props.value / 2}
      />
      <CircularProgress
        {...props}
        variant="determinate"
        thickness={props.size / 22}
        sx={{
          position: "absolute",
          marginBottom: "-40%",
        }}
        style={{
          transform: "rotate(180deg)",
          opacity: "0.3",
        }}
        value={50}
      />
      <Typography
        variant="caption"
        color="text.secondary"
        fontSize={props.size / 5}
        fontWeight={800}
        lineHeight={"100%"}
        sx={{
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10%",
        }}
      >
        {`${Math.round(props.value)}%`}
      </Typography>
      <LinearProgress
        {...props}
        variant="determinate"
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          height: `${props.size / 30}px`,
          width: "100%",
        }}
      ></LinearProgress>
    </Box>
  );
}

const PlantStatsCard = ({ value, color, size }) => {
  return (
    <ProgressWithLabel
      value={value}
      color={color}
      size={size}
    ></ProgressWithLabel>
  );
};

export default PlantStatsCard;
