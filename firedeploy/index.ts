import {environment} from 'config/environment.prod';
import {deploy} from "firebase-tools";
deploy({
	project: environment.firebase.projectId,
	only: "firestore:rules"
}).then(()=>process.exit()).catch(()=>process.exit(1))
