To start a test run: 
```
$(npm bin)/artillery run -o test.json test.yaml
```
To generate report:
```
$(npm bin)/artillery run -o test.json test.yaml
```
To view the report:
```
 $(npm bin)/artillery report ./reports/capture_detect.json    
```

```
   arrivalRate :  number of virtual users every second  
```
```
    rampTo :  number of virtual users to ramp up from arrivalRate to in the given duration
```
