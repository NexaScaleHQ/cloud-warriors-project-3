Help for eksctl https://eksctl.io/

```
eksctl create cluster --name cloud-wariors-cluster --nodegroup-name cloud-wariors-cluster-node-group  --node-type t2.medium --nodes 3 --nodes-min 3 --nodes-max 7 --managed --asg-access
```

If you get this error

```
AWS::EKS::Cluster/ControlPlane: CREATE_FAILED – "Cannot create cluster 
'in28minutes-dev-cluster' because us-east-1e, the targeted availability zone, does not 
currently have sufficient capacity to support the cluster. Retry and choose from these 
availability zones: us-east-1a, us-east-1b, us-east-1c, us-east-1d, us-east-1f (Service: 
	AmazonEKS; Status Code: 400; Error Code: UnsupportedAvailabilityZoneException; Request 
	ID: a5580928-689d-4558-b3bd-2573131ec69e)
```

Add Availability Zones

```
--zones=us-east-1a,us-east-1b

```

Things to Note
- VPCs and SubNets are Created
