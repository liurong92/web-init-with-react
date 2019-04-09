const node_env = process.env.NODE_ENV.trim();
let config = {
  api: {
    target: ''
  }
};

if (node_env === 'development') {
  config = {
    api: {
      target: 'http://localhost:8081'
    }
  };
} else if (node_env === 'production') {
  config = {
    api: {
      target: ''
    }
  };
}

export default config;
