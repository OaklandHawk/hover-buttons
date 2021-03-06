var app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello World'
	}
})

const router = new myRouter ({
	routes: [
		{
			path: "/home",
			component: home
		},
		{
			path: "/about",
			component: about
		},
		{
			path: "/contact"
			component: contact
		},
		{
			path: "/blog",
			component: blog
		},
		{
			path: "/faq",
			component: faq
		}
	]
})
	const home = {
			
			template: `
			<div class = "text-center">
			<h1>Home</h1>
			<img class="" src="data:image/jpeg;base64,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">
			<p>Hi my name is Taylor</p>
			</div>
		`

	}

	const about = {
			
			template: `
			<div class = "text-center">
			<h1>About</h1>
			<img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zcWk_EFw-fj25mzCFm7XSaY80YkGPfyTqWNdwekQTym2DI-m">
			<p>Hi my name is Taylor</p>
			</div>
		`

	}

	const  contact = {
			
			template: `
			<div class = "text-center">
			<h1>Contact</h1>
			<img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzjgvjtkggcftmD-R7lD4Ci7MDWwuXebTfKGGU7UN8S_FVXsWIg">
			<p>Hi my name is Taylor</p>
			</div>
		`

	}

	const blog = {
			
			template: `
			<div class = "text-center">
			<h1>Blog</h1>
			<img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcHIiJax7Qrc_SiY6l2roORVMOxnNv17qCw-bjriILMpxBZfX">
			<p>Hi my name is Taylor</p>
			</div>
		`

	}

	const fag = {
			
			template: `
			<div class = "text-center">
			<h1>Fag</h1>
			<img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ugFF1pwyNEUaOPq1B4uynQ1XqMb6fg6yqgAQK-Tpeg8HyGTr">
			<p>Hi my name is Taylor</p>
			</div>
		`

	}
	var routeTest = new Vue ({
		router, 
		el: '#app',
		data: {		
		},
		methods: {
		}
	}).$mount('#app')

	router.replace({ path: '/home', redirect: '/'})