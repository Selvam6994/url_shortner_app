function SetPassword() {
  return (
    <form onSubmit={formikSignUp.handleSubmit} className="signUpFormSection">
      <span style={{ fontSize: "30px" }}>{formik.values.email}</span>
      <FormControl fullWidth sx={{ m: 1, width: "400px" }} variant="standard">
        <InputLabel
          htmlFor="password"
          style={{
            fontFamily: "Edu SA Beginner",
            fontSize: "20px",
          }}
        >
          Password
        </InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={formikSignUp.handleChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1, width: "400px" }} variant="standard">
        <InputLabel
          htmlFor="confirmPassword"
          style={{
            fontFamily: "Edu SA Beginner",
            fontSize: "20px",
          }}
        >
          Confirm Password
        </InputLabel>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formikSignUp.handleChange}
        />
      </FormControl>
      <Paper
        elevation={8}
        style={{
          width: "200px",
          height: "45px",
          borderRadius: "10px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          style={{
            width: "200px",
            height: "45px",
            borderRadius: "10px",
            fontFamily: "Edu SA Beginner",
            fontSize: "20px",
            backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
          }}
        >
          Sign Up
        </Button>
      </Paper>
    </form>
  );
}
