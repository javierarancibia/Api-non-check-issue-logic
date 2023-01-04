const req = {
  query: 2,
  name: ' fraval',
};

const res = {
  query: 2,
  name: "asa"
}
const q = (req) => {
  if (req.headers !== res.total) {
    console.log('wrong header');
  } else {
    console.log('pasa');
  }
};

q(req);
