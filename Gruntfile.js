module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass:{
			dist:{
				files:{
					'css/style.css':'sass/main.scss',
				}
			}
		},
		jade:{
			compile:{
				options:{
					pretty: true,
				},
				files:{
					'index.html':'templates/index.jade',
					'contact.html':'templates/contact.jade'
				}
			}
		},
		watch:{
			sass:{
				files:['sass/*.scss'],
				tasks:['sass']
			},
			jade:{
				files:['templates/*.jade'],
				tasks:['jade']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.registerTask('default',['jade', 'sass', 'watch']);
};