### Adding Ingress

- https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html

- Check out sample application - https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/2048/2048-ingress.yaml

```
kubectl apply -f k8s/prod-manifests/ingress-service.yaml
```

### Adding Application Insights

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-EKS-quickstart.html

- Attach CloudWatchAgentServerPolicy to the nodes
