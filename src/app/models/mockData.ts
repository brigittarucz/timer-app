import { TrackingStats } from './statsModel';

export const mockClients: Array<string> = [ 'Google', 'Instagram', 'LIDL', 'ZARA', '`URMUM' ];

export const mockDepartments: Array<string> = [ 'Coffee brewing', 'Stroytelling', 'Putting up with martin' ];

export const mockProjects: Array<string> = [ 'Food chewer 6000', 'Suicide booth 9000', 'TreeLovers' ];

export const mockStatistics: TrackingStats[] = [
	{
		task: 'Analytics > Process',
		project: 'Wiredelta > Timer',
		today: 23400,
		month: 274680,
		week: 98100,
		year: 457200
	}
];

export const mockFieldOptions = {
	department: [
		'ads',
		'analytics',
		'business',
		'business0management',
		'design',
		'developer0training',
		'development',
		'finance',
		'HR',
		'institute0admin',
		'legal',
		'logistics',
		'marketing',
		'office0management',
		'project0management',
		'recruitment',
		'sales',
		'SEO',
		'sysadmin',
		'technical0management',
		'unit0management'
	],
	ads: [ 'proposal' ],
	analytics: [ 'maintenance', 'process', 'reports', 'research' ],
	business: [ 'proposal' ],
	business0management: [ 'asana', 'support', 'techdoc' ],
	design: [ 'aftereffects', 'designconcepts', 'illustrator', 'meeting', 'photoshop', 'wireframes' ],
	developer0training: [
		'AJAX',
		'Android',
		'AngularJS',
		'APIs',
		'BackboneJS',
		'C#',
		'Codeigniter',
		'CSS3',
		'Databases',
		'Drupal',
		'EmberJS',
		'FETechniques',
		'Foundation',
		'Git',
		'HTML5',
		'HTML&CSS',
		'Ionic',
		'iOS',
		'Javascript',
		'Joomla',
		'jQuery',
		'JSFrameworks-Ember',
		'Magento',
		'.Net',
		'NodeJS',
		'Phonegap',
		'Photoshop',
		'PHPFrameworks',
		'PHP&MySQL',
		'Prestashop',
		'ReactJS',
		'ReactNativeJS',
		'ResponsiveDesign',
		'Ruby',
		'RubyonRails',
		'Swift',
		'TwitterBootstrap',
		'VueJS',
		'Wordpress'
	],
	development: [
		'AngularJS',
		'BackboneJS',
		'CakePHP',
		'CodeIgniter',
		'Composer',
		'CS-Cart',
		'CSS3',
		'Drupal',
		'EmberJS',
		'ExpressJS',
		'Handlebars',
		'HTML5',
		'HTML5Boilerplate',
		'Ionic',
		'Java',
		'JavaScript',
		'Joomla',
		'jQuery',
		'JSON',
		'Laravel',
		'Magento',
		'Mediaqueries',
		'Meeting',
		'MongoDB',
		'MySQL',
		'NodeJS',
		'Objective-C',
		'Phonegap',
		'PHP',
		'PlainCSS',
		'PlainHTML',
		'Prestashop',
		'Q&ATesting',
		'ReactNativeJS',
		'Reddis',
		'ResponsiveDesign',
		'Ruby',
		'RubyonRails',
		'Swift',
		'Symfoni',
		'Testing',
		'Titanium',
		'TwitterBootstrap',
		'Wordpress',
		'XML',
		'ZenCart',
		'Zend'
	],
	finance: [ 'dispatch', 'process', 'reports', 'wages' ],
	HR: [ 'exits', 'induction', 'process', 'reviews' ],
	institute0admin: [
		'administration',
		'assignations',
		'code0review',
		'course0updates',
		'feedback',
		'interview',
		'presentations'
	],
	legal: [ 'case' ],
	logistics: [ 'office', 'others' ],
	marketing: [ 'CM', 'Events', 'Materials' ],
	office0management: [ 'payments', 'office' ],
	project0management: [ 'Asana', 'F-Brief', 'Meeting', 'Operations', 'Q&ATesting', 'SoW', 'Wireframes' ],
	recruitment: [ 'applications', 'drives', 'interviews', 'jobposting', 'samples' ],
	sales: [ 'B-Network', 'LeadGeneration' ],
	SEO: [ 'Off-page analysis', 'Off-page implementation', 'On-page analysis', 'On-pageimplementation' ],
	sysadmin: [ 'DNS', 'Gitlab', 'Hosting', 'ServerMaintenace' ],
	technical0management: [ 'Asana', 'CodeReview', 'Q&ATesting', 'Support', 'TechDoc' ],
	unit0management: [ 'induction', 'process', 'reports', 'reviews' ],
	clients: [ 'acaiacai', 'ba click' ],
	place: [ 'home', 'office', 'others' ],
	project: [ 'mobile', 'web' ],
	training: [ 'courses', 'assignments' ],
	mode: [ 'Estimations', 'Lead', 'MM', 'Research', 'RM' ]
};

export const mockProjHistory: {
	client: string;
	activities: { activity: string; minutes: number; entries: number }[];
}[] = [
	{
		client: 'wiredelta',
		activities: [
			{ activity: 'test', minutes: 3902, entries: 20 },
			{ activity: 'hosting', minutes: 3902, entries: 20 },
			{ activity: 'blog', minutes: 3902, entries: 20 },
			{ activity: 'marketing', minutes: 3902, entries: 20 },
			{ activity: 'timer', minutes: 3902, entries: 20 },
			{ activity: 'libraries', minutes: 3902, entries: 20 },
			{ activity: 'mylo', minutes: 3902, entries: 20 },
			{ activity: 'client', minutes: 3902, entries: 20 },
			{ activity: 'corporate', minutes: 3902, entries: 20 }
		]
	},
	{
		client: 'blockshipping',
		activities: [ { activity: 'web', minutes: 9021, entries: 15 } ]
	}
];
