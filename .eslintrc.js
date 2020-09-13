module.exports = {
	"plugins": [
	  "prettier",
    "react"
  ],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },

    "rules": {
    	"max-len": [
    		"error",
			{
				"code": 80,
			}
		]
    }
};
